/*
 * Created on Thu Jan 28 2021
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
    exports.structToLoginData = void 0;
    const bson_1 = require("bson");
    function structToLoginData(struct, deviceUUID) {
        return {
            userId: bson_1.Long.fromValue(struct.userId),
            countryIso: struct.countryIso,
            countryCode: struct.countryCode,
            accountId: struct.accountId,
            serverTime: struct.server_time,
            resetUserData: struct.resetUserData,
            storyURL: struct.story_url,
            accessToken: struct.access_token,
            refreshToken: struct.refresh_token,
            deviceUUID: deviceUUID,
            tokenType: struct.token_type,
            autoLoginAccountId: struct.autoLoginAccountId,
            displayAccountId: struct.displayAccountId,
            mainDeviceAgentName: struct.mainDeviceAgentName,
            mainDeviceAppVersion: struct.mainDeviceAppVersion,
        };
    }
    exports.structToLoginData = structToLoginData;
});
//# sourceMappingURL=login.js.map