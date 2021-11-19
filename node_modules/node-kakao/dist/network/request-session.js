/*
 * Created on Mon Jan 18 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../packet", "./packet-assembler", "./loco-packet-codec"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LocoSession = void 0;
    const packet_1 = require("../packet");
    const packet_assembler_1 = require("./packet-assembler");
    const loco_packet_codec_1 = require("./loco-packet-codec");
    class LocoSession {
        constructor(stream) {
            this._assembler = new packet_assembler_1.PacketAssembler(packet_1.BsonDataCodec);
            this._codec = new loco_packet_codec_1.LocoPacketCodec(stream);
            this._nextPromise = null;
            this._packetBuffer = [];
            this._requestSet = new Set();
        }
        get stream() {
            return this._codec.stream;
        }
        _lastBufRes() {
            if (this._packetBuffer.length > 0)
                return this._packetBuffer[this._packetBuffer.length - 1];
        }
        async _readInner() {
            const read = await this._codec.read();
            if (!read)
                return false;
            const res = {
                id: read.header.id,
                push: !this._requestSet.has(read.header.id),
                method: read.header.method,
                data: this._assembler.deconstruct(read)
            };
            this._packetBuffer.push(res);
            return true;
        }
        _readQueued() {
            if (this._nextPromise)
                return this._nextPromise;
            this._nextPromise = this._readInner();
            this._nextPromise.finally(() => this._nextPromise = null);
            return this._nextPromise;
        }
        async read() {
            while (this._packetBuffer.length < 1 && await this._readQueued())
                ;
            const first = this._packetBuffer[0];
            if (first && first.push)
                this._packetBuffer.shift();
            return first;
        }
        async _readId(id) {
            if (this._requestSet.has(id))
                throw new Error(`Packet id collision #${id}`);
            this._requestSet.add(id);
            while (await this._readQueued()) {
                const read = this._lastBufRes();
                if (read && read.id === id && this._requestSet.has(id)) {
                    this._requestSet.delete(id);
                    this._packetBuffer.pop();
                    return read;
                }
            }
        }
        listen() {
            return {
                [Symbol.asyncIterator]() {
                    return this;
                },
                next: async () => {
                    const next = await this.read();
                    if (!next)
                        return { done: true, value: null };
                    return { done: false, value: next };
                }
            };
        }
        async request(method, data) {
            const req = this._assembler.construct(method, data);
            await this._codec.write(req);
            const res = await this._readId(req.header.id);
            if (!res)
                throw new Error(`Session closed before response #${req.header.id}`);
            return res.data;
        }
    }
    exports.LocoSession = LocoSession;
});
//# sourceMappingURL=request-session.js.map