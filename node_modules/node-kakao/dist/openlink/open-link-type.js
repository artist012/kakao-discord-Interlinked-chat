/*
 * Created on Fri May 01 2020
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
    exports.OpenChannelType = exports.OpenProfileType = exports.OpenChannelUserPerm = exports.OpenLinkType = void 0;
    var OpenLinkType;
    (function (OpenLinkType) {
        OpenLinkType[OpenLinkType["PROFILE"] = 1] = "PROFILE";
        OpenLinkType[OpenLinkType["CHANNEL"] = 2] = "CHANNEL";
    })(OpenLinkType = exports.OpenLinkType || (exports.OpenLinkType = {}));
    var OpenChannelUserPerm;
    (function (OpenChannelUserPerm) {
        OpenChannelUserPerm[OpenChannelUserPerm["OWNER"] = 1] = "OWNER";
        OpenChannelUserPerm[OpenChannelUserPerm["NONE"] = 2] = "NONE";
        OpenChannelUserPerm[OpenChannelUserPerm["MANAGER"] = 4] = "MANAGER";
        OpenChannelUserPerm[OpenChannelUserPerm["BOT"] = 8] = "BOT";
    })(OpenChannelUserPerm = exports.OpenChannelUserPerm || (exports.OpenChannelUserPerm = {}));
    var OpenProfileType;
    (function (OpenProfileType) {
        OpenProfileType[OpenProfileType["MAIN"] = 1] = "MAIN";
        OpenProfileType[OpenProfileType["KAKAO_ANON"] = 2] = "KAKAO_ANON";
        OpenProfileType[OpenProfileType["KAKAO_ANON_2"] = 4] = "KAKAO_ANON_2";
        OpenProfileType[OpenProfileType["UNKNOWN_1"] = 8] = "UNKNOWN_1";
        OpenProfileType[OpenProfileType["OPEN_PROFILE"] = 16] = "OPEN_PROFILE";
    })(OpenProfileType = exports.OpenProfileType || (exports.OpenProfileType = {}));
    var OpenChannelType;
    (function (OpenChannelType) {
        OpenChannelType[OpenChannelType["UNKNOWN"] = 0] = "UNKNOWN";
        OpenChannelType[OpenChannelType["DIRECT"] = 1] = "DIRECT";
        OpenChannelType[OpenChannelType["GROUP"] = 2] = "GROUP";
    })(OpenChannelType = exports.OpenChannelType || (exports.OpenChannelType = {}));
});
//# sourceMappingURL=open-link-type.js.map