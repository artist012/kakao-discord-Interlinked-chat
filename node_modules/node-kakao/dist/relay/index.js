/*
 * Created on Sun Aug 02 2020
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
    exports.KnownRelayEventType = void 0;
    var KnownRelayEventType;
    (function (KnownRelayEventType) {
        KnownRelayEventType[KnownRelayEventType["SHOUT"] = 1] = "SHOUT";
    })(KnownRelayEventType = exports.KnownRelayEventType || (exports.KnownRelayEventType = {}));
});
//# sourceMappingURL=index.js.map