/*
 * Created on Sat Dec 14 2019
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
    exports.KnownFeedType = void 0;
    /**
     * Known feed types
     */
    var KnownFeedType;
    (function (KnownFeedType) {
        KnownFeedType[KnownFeedType["LOCAL_LEAVE"] = -1] = "LOCAL_LEAVE";
        KnownFeedType[KnownFeedType["INVITE"] = 1] = "INVITE";
        KnownFeedType[KnownFeedType["LEAVE"] = 2] = "LEAVE";
        KnownFeedType[KnownFeedType["SECRET_LEAVE"] = 3] = "SECRET_LEAVE";
        KnownFeedType[KnownFeedType["OPENLINK_JOIN"] = 4] = "OPENLINK_JOIN";
        KnownFeedType[KnownFeedType["OPENLINK_DELETE_LINK"] = 5] = "OPENLINK_DELETE_LINK";
        KnownFeedType[KnownFeedType["OPENLINK_KICKED"] = 6] = "OPENLINK_KICKED";
        KnownFeedType[KnownFeedType["CHANNEL_KICKED"] = 7] = "CHANNEL_KICKED";
        KnownFeedType[KnownFeedType["CHANNEL_DELETED"] = 8] = "CHANNEL_DELETED";
        KnownFeedType[KnownFeedType["RICH_CONTENT"] = 10] = "RICH_CONTENT";
        KnownFeedType[KnownFeedType["OPEN_MANAGER_GRANT"] = 11] = "OPEN_MANAGER_GRANT";
        KnownFeedType[KnownFeedType["OPEN_MANAGER_REVOKE"] = 12] = "OPEN_MANAGER_REVOKE";
        KnownFeedType[KnownFeedType["OPENLINK_REWRITE_FEED"] = 13] = "OPENLINK_REWRITE_FEED";
        KnownFeedType[KnownFeedType["DELETE_TO_ALL"] = 14] = "DELETE_TO_ALL";
        KnownFeedType[KnownFeedType["OPENLINK_HAND_OVER_HOST"] = 15] = "OPENLINK_HAND_OVER_HOST";
        KnownFeedType[KnownFeedType["TEAM_CHANNEL_EVENT"] = 18] = "TEAM_CHANNEL_EVENT";
    })(KnownFeedType = exports.KnownFeedType || (exports.KnownFeedType = {}));
});
//# sourceMappingURL=feed-type.js.map