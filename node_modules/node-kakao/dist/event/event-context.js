/*
 * Created on Sat Jan 23 2021
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
    exports.EventContext = void 0;
    /**
     * Create event reverse traversal tree structure
     */
    class EventContext {
        constructor(...emitters) {
            this._emitterList = emitters;
        }
        emit(event, ...args) {
            this._emitterList.forEach((emitter) => emitter.emit(event, ...args));
        }
    }
    exports.EventContext = EventContext;
});
//# sourceMappingURL=event-context.js.map