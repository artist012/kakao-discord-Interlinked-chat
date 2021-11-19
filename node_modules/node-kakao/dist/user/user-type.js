/*
 * Created on Sat Nov 02 2019
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
    exports.UserType = void 0;
    var UserType;
    (function (UserType) {
        UserType[UserType["UNDEFINED"] = -999999] = "UNDEFINED";
        UserType[UserType["NOT_FRIEND"] = -100] = "NOT_FRIEND";
        UserType[UserType["DEACTIVATED"] = 9] = "DEACTIVATED";
        UserType[UserType["FRIEND"] = 100] = "FRIEND";
        UserType[UserType["OPEN_PROFILE"] = 1000] = "OPEN_PROFILE";
    })(UserType = exports.UserType || (exports.UserType = {}));
});
//# sourceMappingURL=user-type.js.map