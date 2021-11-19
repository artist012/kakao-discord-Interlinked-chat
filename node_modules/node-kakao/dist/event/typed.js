/*
 * Created on Mon Feb 01 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "eventemitter3"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypedEmitter = void 0;
    const eventemitter3_1 = __importDefault(require("eventemitter3"));
    // We can just use EventEmitter but the typings break on nested event map.
    class TypedEmitter extends eventemitter3_1.default {
    }
    exports.TypedEmitter = TypedEmitter;
});
//# sourceMappingURL=typed.js.map