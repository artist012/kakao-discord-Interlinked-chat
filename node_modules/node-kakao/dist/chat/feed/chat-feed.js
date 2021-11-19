/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.feedToText = exports.feedFromChat = void 0;
    const util_1 = require("../../util");
    /**
     * Read chat text and deserialize
     *
     * @param {TypedChat<KnownChatType.FEED>} chat
     * @return {ChatFeeds}
     */
    function feedFromChat(chat) {
        let feed = { feedType: -999999 };
        try {
            feed = { ...feed };
            if (chat.text) {
                Object.assign(feed, util_1.JsonUtil.parseLoseless(chat.text));
            }
            return feed;
        }
        catch (e) {
            return feed;
        }
    }
    exports.feedFromChat = feedFromChat;
    /**
     * Serialize feed to chat text
     *
     * @param {ChatFeeds} feed
     * @return {string}
     */
    function feedToText(feed) {
        return util_1.JsonUtil.stringifyLoseless(feed);
    }
    exports.feedToText = feedToText;
});
//# sourceMappingURL=chat-feed.js.map