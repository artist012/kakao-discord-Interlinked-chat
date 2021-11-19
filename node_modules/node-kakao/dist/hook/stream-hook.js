/*
 * Created on Sun Jan 24 2021
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
    exports.HookedStream = void 0;
    class HookedStream {
        constructor(_stream, hook = {}) {
            this._stream = _stream;
            this.hook = hook;
        }
        get ended() {
            return this._stream.ended;
        }
        write(data) {
            if (this.hook.onWrite)
                this.hook.onWrite(data);
            return this._stream.write(data);
        }
        async read(buffer) {
            const read = await this._stream.read(buffer);
            if (this.hook.onRead)
                this.hook.onRead(buffer, read);
            return read;
        }
        close() {
            if (this.hook.onClose)
                this.hook.onClose();
            this._stream.close();
        }
    }
    exports.HookedStream = HookedStream;
});
//# sourceMappingURL=stream-hook.js.map