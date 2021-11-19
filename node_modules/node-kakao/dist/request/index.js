/*
 * Created on Tue Jan 19 2021
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
    exports.KnownDataStatusCode = void 0;
    var KnownDataStatusCode;
    (function (KnownDataStatusCode) {
        KnownDataStatusCode[KnownDataStatusCode["SUCCESS"] = 0] = "SUCCESS";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_USER"] = -1] = "INVALID_USER";
        KnownDataStatusCode[KnownDataStatusCode["CLIENT_ERROR"] = -200] = "CLIENT_ERROR";
        KnownDataStatusCode[KnownDataStatusCode["NOT_LOGON"] = -201] = "NOT_LOGON";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_METHOD"] = -202] = "INVALID_METHOD";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_PARAMETER"] = -203] = "INVALID_PARAMETER";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_BODY"] = -203] = "INVALID_BODY";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_HEADER"] = -204] = "INVALID_HEADER";
        KnownDataStatusCode[KnownDataStatusCode["UNAUTHORIZED_CHAT_DELETE"] = -210] = "UNAUTHORIZED_CHAT_DELETE";
        KnownDataStatusCode[KnownDataStatusCode["MEDIA_SERVER_ERROR"] = -300] = "MEDIA_SERVER_ERROR";
        KnownDataStatusCode[KnownDataStatusCode["CHAT_SPAM_LIMIT"] = -303] = "CHAT_SPAM_LIMIT";
        KnownDataStatusCode[KnownDataStatusCode["RESTRICTED_APP"] = -304] = "RESTRICTED_APP";
        KnownDataStatusCode[KnownDataStatusCode["LOGINLIST_CHATLIST_FAILED"] = -305] = "LOGINLIST_CHATLIST_FAILED";
        KnownDataStatusCode[KnownDataStatusCode["MEDIA_NOT_FOUND"] = -306] = "MEDIA_NOT_FOUND";
        KnownDataStatusCode[KnownDataStatusCode["MEDIA_THUMB_GEN_FAILED"] = -307] = "MEDIA_THUMB_GEN_FAILED";
        KnownDataStatusCode[KnownDataStatusCode["UNSUPPORTED"] = -308] = "UNSUPPORTED";
        KnownDataStatusCode[KnownDataStatusCode["PARTIAL"] = -310] = "PARTIAL";
        KnownDataStatusCode[KnownDataStatusCode["LINK_JOIN_TPS_EXCEEDED"] = -312] = "LINK_JOIN_TPS_EXCEEDED";
        KnownDataStatusCode[KnownDataStatusCode["CHAT_SEND_RESTRICTED"] = -321] = "CHAT_SEND_RESTRICTED";
        KnownDataStatusCode[KnownDataStatusCode["CHANNEL_CREATE_TEMP_RESTRICTED"] = -322] = "CHANNEL_CREATE_TEMP_RESTRICTED";
        KnownDataStatusCode[KnownDataStatusCode["CHANNEL_CREATE_RESTRICTED"] = -323] = "CHANNEL_CREATE_RESTRICTED";
        KnownDataStatusCode[KnownDataStatusCode["OPENLINK_UNAVAILABLE"] = -324] = "OPENLINK_UNAVAILABLE";
        KnownDataStatusCode[KnownDataStatusCode["INVITE_COUNT_LIMITED"] = -325] = "INVITE_COUNT_LIMITED";
        KnownDataStatusCode[KnownDataStatusCode["OPENLINK_CREATE_RESTRICTED"] = -326] = "OPENLINK_CREATE_RESTRICTED";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_CHANNEL"] = -401] = "INVALID_CHANNEL";
        KnownDataStatusCode[KnownDataStatusCode["CHAT_BLOCKED_BY_FRIEND"] = -402] = "CHAT_BLOCKED_BY_FRIEND";
        KnownDataStatusCode[KnownDataStatusCode["NOT_CHATABLE_USER"] = -403] = "NOT_CHATABLE_USER";
        KnownDataStatusCode[KnownDataStatusCode["GAME_MESSAGE_BLOCKED"] = -406] = "GAME_MESSAGE_BLOCKED";
        KnownDataStatusCode[KnownDataStatusCode["BLOCKED_IP"] = -444] = "BLOCKED_IP";
        KnownDataStatusCode[KnownDataStatusCode["BACKGROUND_LOGIN_BLOCKED"] = -445] = "BACKGROUND_LOGIN_BLOCKED";
        KnownDataStatusCode[KnownDataStatusCode["OPERATION_DENIED"] = -500] = "OPERATION_DENIED";
        KnownDataStatusCode[KnownDataStatusCode["CHANNEL_USER_LIMITED"] = -501] = "CHANNEL_USER_LIMITED";
        KnownDataStatusCode[KnownDataStatusCode["TEMP_RESTRICTED"] = -805] = "TEMP_RESTRICTED";
        KnownDataStatusCode[KnownDataStatusCode["WRITE_WHILE_BLOCKED"] = -814] = "WRITE_WHILE_BLOCKED";
        KnownDataStatusCode[KnownDataStatusCode["OPENCHAT_REJOIN_REQUIRED"] = -815] = "OPENCHAT_REJOIN_REQUIRED";
        KnownDataStatusCode[KnownDataStatusCode["OPENCHAT_TIME_RESTRICTED"] = -819] = "OPENCHAT_TIME_RESTRICTED";
        KnownDataStatusCode[KnownDataStatusCode["INVALID_ACCESS_TOKEN"] = -950] = "INVALID_ACCESS_TOKEN";
        KnownDataStatusCode[KnownDataStatusCode["BLOCKED_ACCOUNT"] = -997] = "BLOCKED_ACCOUNT";
        KnownDataStatusCode[KnownDataStatusCode["AUTH_REQUIRED"] = -998] = "AUTH_REQUIRED";
        KnownDataStatusCode[KnownDataStatusCode["UPDATE_REQUIRED"] = -999] = "UPDATE_REQUIRED";
        KnownDataStatusCode[KnownDataStatusCode["SERVER_UNDER_MAINTENANCE"] = -9797] = "SERVER_UNDER_MAINTENANCE";
    })(KnownDataStatusCode = exports.KnownDataStatusCode || (exports.KnownDataStatusCode = {}));
});
//# sourceMappingURL=index.js.map