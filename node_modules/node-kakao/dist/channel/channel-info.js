/*
 * Created on Mon Jan 18 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "bson"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NormalChannelInfo = exports.ChannelInfo = void 0;
    const bson_1 = require("bson");
    // eslint-disable-next-line no-redeclare
    var ChannelInfo;
    (function (ChannelInfo) {
        function createPartial(info) {
            return Object.assign({
                channelId: bson_1.Long.ZERO,
                type: '',
                activeUserCount: 0,
                newChatCount: 0,
                newChatCountInvalid: true,
                lastChatLogId: bson_1.Long.ZERO,
                lastSeenLogId: bson_1.Long.ZERO,
                displayUserList: [],
                metaMap: {},
                pushAlert: false,
            }, info);
        }
        ChannelInfo.createPartial = createPartial;
    })(ChannelInfo = exports.ChannelInfo || (exports.ChannelInfo = {}));
    // eslint-disable-next-line @typescript-eslint/no-namespace,no-redeclare
    var NormalChannelInfo;
    (function (NormalChannelInfo) {
        function createPartial(info) {
            return Object.assign({
                ...ChannelInfo.createPartial(info),
                joinTime: 0,
            }, info);
        }
        NormalChannelInfo.createPartial = createPartial;
    })(NormalChannelInfo = exports.NormalChannelInfo || (exports.NormalChannelInfo = {}));
});
//# sourceMappingURL=channel-info.js.map