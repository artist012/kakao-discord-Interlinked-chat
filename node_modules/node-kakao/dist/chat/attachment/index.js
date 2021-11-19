/*
 * Created on Wed Jan 27 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./reply", "./mention", "./media", "./emoticon", "./voip", "./contact", "./map", "./post", "./openlink"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./reply"), exports);
    __exportStar(require("./mention"), exports);
    __exportStar(require("./media"), exports);
    __exportStar(require("./emoticon"), exports);
    __exportStar(require("./voip"), exports);
    __exportStar(require("./contact"), exports);
    __exportStar(require("./map"), exports);
    __exportStar(require("./post"), exports);
    __exportStar(require("./openlink"), exports);
});
//# sourceMappingURL=index.js.map