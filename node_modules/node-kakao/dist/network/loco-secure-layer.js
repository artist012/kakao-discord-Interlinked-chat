/*
 * Created on Sun Jan 17 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./chunk", "../stream"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LocoSecureLayer = void 0;
    const chunk_1 = require("./chunk");
    const stream_1 = require("../stream");
    /**
     * Loco secure layer that encrypt outgoing packets
     */
    class LocoSecureLayer {
        constructor(socket, crypto) {
            this._stream = socket;
            this._crypto = crypto;
            this._handshaked = false;
            this._dataChunks = new chunk_1.ChunkedArrayBufferList();
        }
        async read(buffer) {
            if (this._dataChunks.byteLength <= 0) {
                const headerBuffer = await stream_1.ReadStreamUtil.exact(this._stream, 20);
                if (!headerBuffer)
                    return null;
                const dataSize = new DataView(headerBuffer.buffer).getUint32(0, true) - 16;
                const iv = headerBuffer.subarray(4, 20);
                const encryptedData = await stream_1.ReadStreamUtil.exact(this._stream, dataSize);
                if (!encryptedData)
                    return null;
                this._dataChunks.append(this._crypto.toAESDecrypted(encryptedData, iv));
            }
            const data = this._dataChunks.toBuffer();
            this._dataChunks.clear();
            const readSize = Math.min(data.byteLength, buffer.byteLength);
            buffer.set(data.subarray(0, readSize), 0);
            if (data.byteLength > buffer.byteLength) {
                this._dataChunks.append(data.subarray(buffer.byteLength));
            }
            return readSize;
        }
        get ended() {
            return this._stream.ended;
        }
        get crypto() {
            return this._crypto;
        }
        /**
         * @return {BiStream} original stream
         */
        get stream() {
            return this._stream;
        }
        /**
         * @return {boolean} true if handshake sent.
         */
        get handshaked() {
            return this._handshaked;
        }
        async write(data) {
            if (!this._handshaked) {
                await this.sendHandshake();
                this._handshaked = true;
            }
            const iv = this._crypto.randomCipherIV();
            const encrypted = this._crypto.toAESEncrypted(data, iv);
            const packetBuffer = new ArrayBuffer(encrypted.byteLength + 20);
            const packet = new Uint8Array(packetBuffer);
            new DataView(packetBuffer).setUint32(0, encrypted.byteLength + 16, true);
            packet.set(iv, 4);
            packet.set(encrypted, 20);
            return this._stream.write(packet);
        }
        async sendHandshake() {
            const encryptedKey = this._crypto.getRSAEncryptedKey();
            const handshakeBuffer = new ArrayBuffer(12 + encryptedKey.byteLength);
            const handshakePacket = new Uint8Array(handshakeBuffer);
            const view = new DataView(handshakeBuffer);
            view.setUint32(0, encryptedKey.byteLength, true);
            view.setUint32(4, 12, true); // RSA OAEP SHA1 MGF1 SHA1
            view.setUint32(8, 2, true); // AES_CFB128 NOPADDING
            handshakePacket.set(encryptedKey, 12);
            await this._stream.write(handshakePacket);
        }
        close() {
            this._stream.close();
        }
    }
    exports.LocoSecureLayer = LocoSecureLayer;
});
//# sourceMappingURL=loco-secure-layer.js.map