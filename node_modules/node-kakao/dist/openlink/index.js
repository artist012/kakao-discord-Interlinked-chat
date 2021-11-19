/*
 * Created on Mon Jan 18 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./open-channel-info", "./open-channel-session", "./open-channel", "./open-link-profile", "./open-link-session", "./open-link-type", "./open-link-user-info", "./open-link-service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KnownLinkPrivilegeMask = void 0;
    __exportStar(require("./open-channel-info"), exports);
    __exportStar(require("./open-channel-session"), exports);
    __exportStar(require("./open-channel"), exports);
    __exportStar(require("./open-link-profile"), exports);
    __exportStar(require("./open-link-session"), exports);
    __exportStar(require("./open-link-type"), exports);
    __exportStar(require("./open-link-user-info"), exports);
    __exportStar(require("./open-link-service"), exports);
    var KnownLinkPrivilegeMask;
    (function (KnownLinkPrivilegeMask) {
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["URL_SHARABLE"] = 2] = "URL_SHARABLE";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["REPORTABLE"] = 4] = "REPORTABLE";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["PROFILE_EDITABLE"] = 8] = "PROFILE_EDITABLE";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["ANY_PROFILE_ALLOWED"] = 32] = "ANY_PROFILE_ALLOWED";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["USE_PASS_CODE"] = 64] = "USE_PASS_CODE";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["BLINDABLE"] = 128] = "BLINDABLE";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["NON_SPECIAL_LINK"] = 512] = "NON_SPECIAL_LINK";
        KnownLinkPrivilegeMask[KnownLinkPrivilegeMask["USE_BOT"] = 1024] = "USE_BOT";
    })(KnownLinkPrivilegeMask = exports.KnownLinkPrivilegeMask || (exports.KnownLinkPrivilegeMask = {}));
});
//# sourceMappingURL=index.js.map