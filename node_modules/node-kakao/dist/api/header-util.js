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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fillCredential = exports.getUserAgent = exports.fillBaseHeader = exports.fillAHeader = void 0;
    function fillAHeader(header, config) {
        header['A'] = `${config.agent}/${config.version}/${config.language}`;
    }
    exports.fillAHeader = fillAHeader;
    function fillBaseHeader(header, config) {
        header['Accept'] = '*/*';
        header['Accept-Language'] = config.language;
    }
    exports.fillBaseHeader = fillBaseHeader;
    function getUserAgent(config) {
        let os = '';
        if (config.agent === 'win32') {
            os = `Wd/${config.osVersion}`;
        }
        else if (config.agent === 'android') {
            os = `An/${config.osVersion}`;
        }
        else {
            os = `Wd/${config.osVersion}`;
        }
        return `KT/${config.version} ${os} ${config.language}`;
    }
    exports.getUserAgent = getUserAgent;
    function fillCredential(header, credential) {
        header['Authorization'] = `${credential.accessToken}-${credential.deviceUUID}`;
    }
    exports.fillCredential = fillCredential;
});
//# sourceMappingURL=header-util.js.map