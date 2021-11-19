/*
 * Created on Sun Jan 31 2021
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
    exports.FixedWriteStream = exports.FixedReadStream = void 0;
    /**
     * Fixed sized stream that can be used for reading.
     * Extra bytes are removed.
     */
    class FixedReadStream {
        constructor(_stream, _size) {
            this._stream = _stream;
            this._size = _size;
            this._read = 0;
        }
        get size() {
            return this._size;
        }
        /**
         * Read size
         */
        get readSize() {
            return this._read;
        }
        get done() {
            return this._read >= this._size;
        }
        async read(buffer) {
            if (this.done)
                return 0;
            let view = buffer;
            if (this._read + view.byteLength > this._size) {
                view = buffer.subarray(0, this._size - this._read);
            }
            const read = await this._stream.read(view);
            if (read)
                this._read += read;
            return read;
        }
        get ended() {
            return this._stream.ended;
        }
        close() {
            this._stream.close();
        }
    }
    exports.FixedReadStream = FixedReadStream;
    class FixedWriteStream {
        constructor(_stream, _size) {
            this._stream = _stream;
            this._size = _size;
            this._written = 0;
        }
        get size() {
            return this._size;
        }
        get done() {
            return this._written >= this._size;
        }
        /**
         * Written size
         */
        get written() {
            return this._written;
        }
        async write(data) {
            if (this.done)
                return 0;
            let view = data;
            if (this._written + view.byteLength > this._size) {
                view = data.subarray(0, Math.max(this._size - this._written, 0));
            }
            const written = await this._stream.write(view);
            this._written += written;
            return written;
        }
        get ended() {
            return this._stream.ended;
        }
        close() {
            this._stream.close();
        }
    }
    exports.FixedWriteStream = FixedWriteStream;
});
//# sourceMappingURL=fixed.js.map