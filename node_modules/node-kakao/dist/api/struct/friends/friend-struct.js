/*
 * Created on Wed May 20 2020
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
    exports.ApiUserType = void 0;
    var ApiUserType;
    (function (ApiUserType) {
        ApiUserType[ApiUserType["NORMAL"] = 0] = "NORMAL";
        ApiUserType[ApiUserType["PLUS"] = 1] = "PLUS";
    })(ApiUserType = exports.ApiUserType || (exports.ApiUserType = {}));
});
//# sourceMappingURL=friend-struct.js.map