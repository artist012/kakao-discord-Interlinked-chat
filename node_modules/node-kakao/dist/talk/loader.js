/*
 * Created on Sun Mar 07 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../channel", "../openlink", "./channel", "./chat"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TalkInMemoryDataLoader = void 0;
    const channel_1 = require("../channel");
    const openlink_1 = require("../openlink");
    const channel_2 = require("./channel");
    const chat_1 = require("./chat");
    exports.TalkInMemoryDataLoader = {
        async loadChatListStore() {
            return {
                shouldUpdate: false,
                value: new chat_1.TalkMemoryChatListStore(300)
            };
        },
        async loadNormalChannelStore() {
            return {
                shouldUpdate: true,
                value: new channel_2.TalkMemoryChannelDataStore(channel_1.NormalChannelInfo.createPartial({}))
            };
        },
        async loadOpenChannelStore() {
            return {
                shouldUpdate: true,
                value: new channel_2.TalkMemoryChannelDataStore(openlink_1.OpenChannelInfo.createPartial({}))
            };
        }
    };
});
//# sourceMappingURL=loader.js.map