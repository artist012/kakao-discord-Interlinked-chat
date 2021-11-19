/*
 * Created on Sat Jan 30 2021
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
    exports.randomAndroidSubDeviceUUID = exports.randomWin32DeviceUUID = void 0;
    const BASE64_LIST = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const HEX_LIST = '0123456789abcdef';
    /**
     * Create random device uuid for windows platform
     *
     * @return {string} random device UUID
     */
    function randomWin32DeviceUUID() {
        return Array.from({ length: 86 }, () => BASE64_LIST[~~(Math.random() * 64)]).join('') + '==';
    }
    exports.randomWin32DeviceUUID = randomWin32DeviceUUID;
    /**
     * Create random device uuid for android subdevice
     *
     * @return {string} random device UUID
     */
    function randomAndroidSubDeviceUUID() {
        return Array.from({ length: 40 }, () => HEX_LIST[~~(Math.random() * 16)]).join('');
    }
    exports.randomAndroidSubDeviceUUID = randomAndroidSubDeviceUUID;
});
//# sourceMappingURL=device.js.map