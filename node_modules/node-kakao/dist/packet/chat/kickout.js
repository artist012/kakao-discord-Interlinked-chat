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
    exports.KnownKickoutType = void 0;
    var KnownKickoutType;
    (function (KnownKickoutType) {
        KnownKickoutType[KnownKickoutType["CHANGE_SERVER"] = -2] = "CHANGE_SERVER";
        KnownKickoutType[KnownKickoutType["LOGIN_ANOTHER"] = 0] = "LOGIN_ANOTHER";
        KnownKickoutType[KnownKickoutType["ACCOUNT_DELETED"] = 1] = "ACCOUNT_DELETED";
    })(KnownKickoutType = exports.KnownKickoutType || (exports.KnownKickoutType = {}));
});
//# sourceMappingURL=kickout.js.map