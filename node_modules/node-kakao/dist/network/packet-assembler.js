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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PacketAssembler = void 0;
    /**
     * Construct LocoPacket object from packet data.
     * Deconstruct LocoPacket into packet data.
     */
    class PacketAssembler {
        constructor(dataCodec) {
            this._currentId = 1;
            this._dataCodec = dataCodec;
        }
        /**
         * Construct LocoPacket with given method and data
         *
         * @param {string} method
         * @param {T} data
         * @return {LocoPacket}
         */
        construct(method, data) {
            const packetData = this._dataCodec.encode(data);
            return {
                header: {
                    id: (this._currentId = (this._currentId + 1) % 100000),
                    method,
                    status: 0,
                },
                data: packetData,
            };
        }
        /**
         * Deconstruct LocoPacket into data.
         * This method can throw error if the type is not supported by codec.
         *
         * @template R
         * @param {LocoPacket} packet
         * @return {R}
         */
        deconstruct(packet) {
            if (!this._dataCodec.canDecode(packet.data[0]))
                throw new Error(`Cannot decode dataType ${packet.data[0]}`);
            return this._dataCodec.decode(packet.data[1]);
        }
    }
    exports.PacketAssembler = PacketAssembler;
});
//# sourceMappingURL=packet-assembler.js.map