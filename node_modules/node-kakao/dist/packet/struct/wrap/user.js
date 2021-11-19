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
        define(["require", "exports", "../../../user"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.structToOpenLinkKickedUserInfo = exports.structToOpenLinkChannelUserInfo = exports.structToOpenChannelUserInfo = exports.structToChannelUserInfo = void 0;
    const user_1 = require("../../../user");
    function structToChannelUserInfo(struct) {
        return {
            userId: struct.userId,
            userType: struct.type,
            nickname: struct.nickName,
            countryIso: struct.countryIso,
            statusMessage: struct.statusMessage,
            suspended: struct.suspended,
            linkedServices: struct.linkedServices,
            profileURL: struct.profileImageUrl,
            fullProfileURL: struct.fullProfileImageUrl,
            originalProfileURL: struct.originalProfileImageUrl,
            ut: struct.ut,
            accountId: struct.accountId,
        };
    }
    exports.structToChannelUserInfo = structToChannelUserInfo;
    function structToOpenChannelUserInfo(struct) {
        return {
            userId: struct.userId,
            linkId: struct.pli,
            openToken: struct.opt,
            perm: struct.mt,
            userType: struct.type,
            nickname: struct.nickName,
            profileURL: struct.pi,
            fullProfileURL: struct.fpi,
            originalProfileURL: struct.opi,
        };
    }
    exports.structToOpenChannelUserInfo = structToOpenChannelUserInfo;
    function structToOpenLinkChannelUserInfo(struct) {
        return {
            userId: struct.userId,
            linkId: struct.pli,
            openToken: struct.opt,
            perm: struct.lmt,
            userType: user_1.UserType.OPEN_PROFILE,
            nickname: struct.nn,
            profileURL: struct.pi,
            fullProfileURL: struct.fpi,
            originalProfileURL: struct.opi,
            privilege: struct.pv,
            profileType: struct.ptp,
        };
    }
    exports.structToOpenLinkChannelUserInfo = structToOpenLinkChannelUserInfo;
    function structToOpenLinkKickedUserInfo(struct) {
        return {
            nickname: struct.nickName,
            userId: struct.userId,
            profileURL: struct.pi,
            kickedChannelId: struct.c,
        };
    }
    exports.structToOpenLinkKickedUserInfo = structToOpenLinkKickedUserInfo;
});
//# sourceMappingURL=user.js.map