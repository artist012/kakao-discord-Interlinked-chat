/*
 * Created on Wed Jan 27 2021
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
    exports.ChainedIterator = void 0;
    class ChainedIterator {
        constructor(...list) {
            this._list = list.reverse();
        }
        [Symbol.iterator]() {
            return this;
        }
        next() {
            if (this._list.length < 1)
                return { done: true, value: null };
            const last = this._list[this._list.length - 1];
            const next = last.next();
            if (next.done) {
                this._list.pop();
                return this.next();
            }
            return next;
        }
    }
    exports.ChainedIterator = ChainedIterator;
});
//# sourceMappingURL=chained-iterator.js.map