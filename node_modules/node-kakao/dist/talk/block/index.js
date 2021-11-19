/*
 * Created on Mon Feb 01 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../request"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TalkBlockType = exports.TalkBlockSession = void 0;
    const request_1 = require("../../request");
    /**
     * Provide user block / unblock api.
     * Note: To get block list use web api.
     */
    class TalkBlockSession {
        constructor(_session) {
            this._session = _session;
        }
        /**
           * Block normal user
           *
           * @param {ChannelUser} user
           * @param {TalkBlockType} type
           */
        async blockUser(user, type = TalkBlockType.BLOCK) {
            const res = await this._session.request('BLADDITEM', {
                'l': [user.userId],
                'ts': [type],
            });
            return { success: res.status === request_1.KnownDataStatusCode.SUCCESS, status: res.status };
        }
        /**
           * Block plus user
           *
           * @param {ChannelUser} plusUser
           * @param {TalkBlockType} type
           */
        async blockPlusUser(plusUser, type = TalkBlockType.BLOCK) {
            const res = await this._session.request('BLADDITEM', {
                'pl': [plusUser.userId],
                'pts': [type],
            });
            return { success: res.status === request_1.KnownDataStatusCode.SUCCESS, status: res.status };
        }
        /**
           * Unblock normal user.
           *
           * @param {ChannelUser} user
           */
        async unblockUser(user) {
            const res = await this._session.request('BLDELITEM', {
                'l': [user.userId],
            });
            return { success: res.status === request_1.KnownDataStatusCode.SUCCESS, status: res.status };
        }
        /**
           * Unblock plus user.
           *
           * @param {ChannelUser} plusUser
           */
        async unblockPlusUser(plusUser) {
            const res = await this._session.request('BLDELITEM', {
                'pl': [plusUser.userId],
            });
            return { success: res.status === request_1.KnownDataStatusCode.SUCCESS, status: res.status };
        }
    }
    exports.TalkBlockSession = TalkBlockSession;
    var TalkBlockType;
    (function (TalkBlockType) {
        TalkBlockType[TalkBlockType["BLOCK"] = 0] = "BLOCK";
        TalkBlockType[TalkBlockType["BLOCK_HIDE_PROFILE"] = 1] = "BLOCK_HIDE_PROFILE";
    })(TalkBlockType = exports.TalkBlockType || (exports.TalkBlockType = {}));
});
//# sourceMappingURL=index.js.map