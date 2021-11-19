/*
 * Created on Sun Jan 17 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fixed"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadStreamUtil = void 0;
    __exportStar(require("./fixed"), exports);
    /**
     * Additional Readstream util
     */
    var ReadStreamUtil;
    (function (ReadStreamUtil) {
        /**
         * Create AsyncIterableIterator which read stream buffers up to size bytes.
         *
         * @param {ReadStream} stream
         * @param {number} [size=65535]
         * @return {AsyncIterableIterator<Uint8Array>}
         */
        function iter(stream, size = 65535) {
            return {
                [Symbol.asyncIterator]() {
                    return this;
                },
                async next() {
                    const buffer = new Uint8Array(size);
                    const read = await stream.read(buffer);
                    if (!read)
                        return { done: true, value: null };
                    return { done: false, value: buffer.subarray(0, read) };
                }
            };
        }
        ReadStreamUtil.iter = iter;
        /**
         * Read every data to end of stream.
         *
         * @param {ReadStream} stream
         */
        async function all(stream) {
            const bufferList = [];
            let total = 0;
            for await (const buffer of iter(stream)) {
                bufferList.push(buffer);
                total += buffer.byteLength;
            }
            const data = new Uint8Array(total);
            let offset = 0;
            for (const buffer of bufferList) {
                data.set(buffer, offset);
                offset += buffer.byteLength;
            }
            return data;
        }
        ReadStreamUtil.all = all;
        /**
         * Read exact size bytes into Uint8Array or null if the stream ends before to fill all.
         *
         * @param {ReadStream} stream
         * @param {number} size
         */
        async function exact(stream, size) {
            const data = new Uint8Array(size);
            let read = await stream.read(data);
            if (!read)
                return null;
            while (read < size) {
                const dataRead = await stream.read(data.subarray(read));
                if (!dataRead)
                    return null;
                read += dataRead;
            }
            return data;
        }
        ReadStreamUtil.exact = exact;
        /**
         * Write every read data from ReadStream to WriteStream.
         *
         * @param {ReadStream} read Stream to be read
         * @param {WriteStream} write Stream to be written
         * @return {Promise<number>} Bytes written.
         */
        async function copy(read, write) {
            let written = 0;
            for await (const data of iter(read)) {
                if (write.ended)
                    break;
                written += await write.write(data);
            }
            return written;
        }
        ReadStreamUtil.copy = copy;
    })(ReadStreamUtil = exports.ReadStreamUtil || (exports.ReadStreamUtil = {}));
});
//# sourceMappingURL=index.js.map