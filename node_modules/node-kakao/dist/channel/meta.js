/*
 * Created on Fri Jun 05 2020
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
    exports.ChannelClientMetaType = exports.KnownChannelMetaType = void 0;
    var KnownChannelMetaType;
    (function (KnownChannelMetaType) {
        KnownChannelMetaType[KnownChannelMetaType["UNDEFINED"] = 0] = "UNDEFINED";
        KnownChannelMetaType[KnownChannelMetaType["NOTICE"] = 1] = "NOTICE";
        KnownChannelMetaType[KnownChannelMetaType["GROUP"] = 2] = "GROUP";
        KnownChannelMetaType[KnownChannelMetaType["TITLE"] = 3] = "TITLE";
        KnownChannelMetaType[KnownChannelMetaType["PROFILE"] = 4] = "PROFILE";
        KnownChannelMetaType[KnownChannelMetaType["TV"] = 5] = "TV";
        KnownChannelMetaType[KnownChannelMetaType["PRIVILEGE"] = 6] = "PRIVILEGE";
        KnownChannelMetaType[KnownChannelMetaType["TV_LIVE"] = 7] = "TV_LIVE";
        KnownChannelMetaType[KnownChannelMetaType["PLUS_BACKGROUND"] = 8] = "PLUS_BACKGROUND";
        KnownChannelMetaType[KnownChannelMetaType["LIVE_TALK_INFO"] = 11] = "LIVE_TALK_INFO";
        KnownChannelMetaType[KnownChannelMetaType["LIVE_TALK_COUNT"] = 12] = "LIVE_TALK_COUNT";
        KnownChannelMetaType[KnownChannelMetaType["OPEN_CHANNEL_CHAT"] = 13] = "OPEN_CHANNEL_CHAT";
        KnownChannelMetaType[KnownChannelMetaType["BOT"] = 14] = "BOT";
    })(KnownChannelMetaType = exports.KnownChannelMetaType || (exports.KnownChannelMetaType = {}));
    var ChannelClientMetaType;
    (function (ChannelClientMetaType) {
        ChannelClientMetaType["UNDEFINED"] = "undefined";
        ChannelClientMetaType["NAME"] = "name";
        ChannelClientMetaType["IMAGE_PATH"] = "image_path";
        ChannelClientMetaType["FAVORITE"] = "favorite";
        ChannelClientMetaType["PUSH_SOUND"] = "push_sound";
        ChannelClientMetaType["CHAT_HIDE"] = "chat_hide";
        ChannelClientMetaType["FULL_IMAGE_URL"] = "full_image_url";
        ChannelClientMetaType["IMAGE_URL"] = "imageUrl";
    })(ChannelClientMetaType = exports.ChannelClientMetaType || (exports.ChannelClientMetaType = {}));
});
//# sourceMappingURL=meta.js.map