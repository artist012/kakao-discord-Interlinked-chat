/*
 * Created on Fri Jan 22 2021
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
    exports.ChatRefererType = void 0;
    var ChatRefererType;
    (function (ChatRefererType) {
        ChatRefererType[ChatRefererType["KAKAOI"] = 1] = "KAKAOI";
        ChatRefererType[ChatRefererType["BOT"] = 2] = "BOT";
    })(ChatRefererType = exports.ChatRefererType || (exports.ChatRefererType = {}));
});
//# sourceMappingURL=chat.js.map