/*
 * Created on Thu Jun 04 2020
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
    exports.ClientStatus = void 0;
    var ClientStatus;
    (function (ClientStatus) {
        ClientStatus[ClientStatus["UNLOCKED"] = 1] = "UNLOCKED";
        ClientStatus[ClientStatus["LOCKED"] = 2] = "LOCKED";
    })(ClientStatus = exports.ClientStatus || (exports.ClientStatus = {}));
});
//# sourceMappingURL=client-status.js.map