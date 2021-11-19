/*
 * Created on Mon Jan 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "bson", "../channel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpenChannelInfo = void 0;
    const bson_1 = require("bson");
    const channel_1 = require("../channel");
    // eslint-disable-next-line no-redeclare
    var OpenChannelInfo;
    (function (OpenChannelInfo) {
        function createPartial(info) {
            return Object.assign({
                ...channel_1.ChannelInfo.createPartial(info),
                linkId: bson_1.Long.ZERO,
                openToken: 0,
                directChannel: false,
                openLink: null
            }, info);
        }
        OpenChannelInfo.createPartial = createPartial;
    })(OpenChannelInfo = exports.OpenChannelInfo || (exports.OpenChannelInfo = {}));
});
//# sourceMappingURL=open-channel-info.js.map