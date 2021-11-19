/*
 * Created on Thu Oct 31 2019
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
    exports.getOriginalType = exports.isDeletedChat = exports.DELETED_MESSAGE_OFFSET = exports.KnownChatType = void 0;
    /**
     * Known chat type.
     */
    var KnownChatType;
    (function (KnownChatType) {
        KnownChatType[KnownChatType["FEED"] = 0] = "FEED";
        KnownChatType[KnownChatType["TEXT"] = 1] = "TEXT";
        KnownChatType[KnownChatType["PHOTO"] = 2] = "PHOTO";
        KnownChatType[KnownChatType["VIDEO"] = 3] = "VIDEO";
        KnownChatType[KnownChatType["CONTACT"] = 4] = "CONTACT";
        KnownChatType[KnownChatType["AUDIO"] = 5] = "AUDIO";
        KnownChatType[KnownChatType["DITEMEMOTICON"] = 6] = "DITEMEMOTICON";
        KnownChatType[KnownChatType["DITEMGIFT"] = 7] = "DITEMGIFT";
        KnownChatType[KnownChatType["DITEMIMG"] = 8] = "DITEMIMG";
        KnownChatType[KnownChatType["KAKAOLINKV1"] = 9] = "KAKAOLINKV1";
        KnownChatType[KnownChatType["AVATAR"] = 11] = "AVATAR";
        KnownChatType[KnownChatType["STICKER"] = 12] = "STICKER";
        KnownChatType[KnownChatType["SCHEDULE"] = 13] = "SCHEDULE";
        KnownChatType[KnownChatType["VOTE"] = 14] = "VOTE";
        KnownChatType[KnownChatType["LOTTERY"] = 15] = "LOTTERY";
        KnownChatType[KnownChatType["MAP"] = 16] = "MAP";
        KnownChatType[KnownChatType["PROFILE"] = 17] = "PROFILE";
        KnownChatType[KnownChatType["FILE"] = 18] = "FILE";
        KnownChatType[KnownChatType["STICKERANI"] = 20] = "STICKERANI";
        KnownChatType[KnownChatType["NUDGE"] = 21] = "NUDGE";
        KnownChatType[KnownChatType["ACTIONCON"] = 22] = "ACTIONCON";
        KnownChatType[KnownChatType["SEARCH"] = 23] = "SEARCH";
        KnownChatType[KnownChatType["POST"] = 24] = "POST";
        KnownChatType[KnownChatType["STICKERGIF"] = 25] = "STICKERGIF";
        KnownChatType[KnownChatType["REPLY"] = 26] = "REPLY";
        KnownChatType[KnownChatType["MULTIPHOTO"] = 27] = "MULTIPHOTO";
        KnownChatType[KnownChatType["VOIP"] = 51] = "VOIP";
        KnownChatType[KnownChatType["LIVETALK"] = 52] = "LIVETALK";
        KnownChatType[KnownChatType["CUSTOM"] = 71] = "CUSTOM";
        KnownChatType[KnownChatType["ALIM"] = 72] = "ALIM";
        KnownChatType[KnownChatType["PLUSFRIEND"] = 81] = "PLUSFRIEND";
        KnownChatType[KnownChatType["PLUSEVENT"] = 82] = "PLUSEVENT";
        KnownChatType[KnownChatType["PLUSFRIENDVIRAL"] = 83] = "PLUSFRIENDVIRAL";
        KnownChatType[KnownChatType["OPEN_SCHEDULE"] = 96] = "OPEN_SCHEDULE";
        KnownChatType[KnownChatType["OPEN_VOTE"] = 97] = "OPEN_VOTE";
        KnownChatType[KnownChatType["OPEN_POST"] = 98] = "OPEN_POST";
    })(KnownChatType = exports.KnownChatType || (exports.KnownChatType = {}));
    exports.DELETED_MESSAGE_OFFSET = 16384;
    function isDeletedChat(type) {
        return type >= exports.DELETED_MESSAGE_OFFSET;
    }
    exports.isDeletedChat = isDeletedChat;
    function getOriginalType(type) {
        return type & 0xffffbfff;
    }
    exports.getOriginalType = getOriginalType;
});
//# sourceMappingURL=chat-type.js.map