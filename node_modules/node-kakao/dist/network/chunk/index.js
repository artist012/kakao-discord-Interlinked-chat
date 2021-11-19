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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChunkedArrayBufferList = void 0;
    class ChunkedArrayBufferList {
        constructor() {
            this._list = [];
            this._total = 0;
        }
        get byteLength() {
            return this._total;
        }
        get count() {
            return this._list.length;
        }
        append(buf) {
            this._total += buf.byteLength;
            this._list.push(buf);
        }
        toBuffer() {
            if (this._list.length < 1)
                return new Uint8Array(0);
            if (this._list.length < 2)
                return this._list[0];
            const array = new Uint8Array(this._total);
            let offset = 0;
            for (const item of this._list) {
                array.set(item, offset);
                offset += item.byteLength;
            }
            return array;
        }
        clear() {
            this._list = [];
            this._total = 0;
        }
    }
    exports.ChunkedArrayBufferList = ChunkedArrayBufferList;
});
//# sourceMappingURL=index.js.map