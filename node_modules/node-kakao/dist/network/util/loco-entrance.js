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
        define(["require", "exports", "../../request", "../request-session"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCheckinData = exports.getBookingData = void 0;
    const request_1 = require("../../request");
    const request_session_1 = require("../request-session");
    /**
     * Do booking process and return result.
     * Official server require tls.
     *
     * @param {BiStream} stream
     * @param {BookingConfig} config
     */
    async function getBookingData(stream, config) {
        const bookingSession = new request_session_1.LocoSession(stream);
        const req = {
            'MCCMNC': config.mccmnc,
            'model': config.deviceModel,
            'os': config.agent,
        };
        const res = await bookingSession.request('GETCONF', req);
        bookingSession.stream.close();
        return { status: res.status, success: res.status === request_1.KnownDataStatusCode.SUCCESS, result: res };
    }
    exports.getBookingData = getBookingData;
    /**
     * Do checkin process and return result.
     * Official server require secure layer.
     *
     * @param {BiStream} stream
     * @param {CheckinConfig} config
     * @param {Long} userId
     */
    async function getCheckinData(stream, config, userId) {
        const checkinSession = new request_session_1.LocoSession(stream);
        const req = {
            'MCCMNC': config.mccmnc,
            'appVer': config.appVersion,
            'countryISO': config.countryIso,
            'lang': config.language,
            'ntype': config.netType,
            'useSub': config.subDevice,
            'os': config.agent,
            userId
        };
        const res = await checkinSession.request('CHECKIN', req);
        checkinSession.stream.close();
        return { status: res.status, success: res.status === request_1.KnownDataStatusCode.SUCCESS, result: res };
    }
    exports.getCheckinData = getCheckinData;
});
//# sourceMappingURL=loco-entrance.js.map