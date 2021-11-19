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
    exports.isBrowser = exports.isDeno = exports.isNode = void 0;
    function isNode() {
        return !!(process && process.release && process.release.name === 'node');
    }
    exports.isNode = isNode;
    function isDeno() {
        return !!(window && window.Deno && window.Deno.version && window.Deno.version);
    }
    exports.isDeno = isDeno;
    function isBrowser() {
        return navigator && 'userAgent' in navigator;
    }
    exports.isBrowser = isBrowser;
});
//# sourceMappingURL=platform.js.map