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
        define(["require", "exports", "./chat-info", "./chat-on-room", "./chg-meta", "./create", "./decunread", "./forward", "./get-mem", "./get-trailer", "./info-link", "./join-info", "./kickout", "./kl-sync", "./left", "./link-kicked", "./login-list", "./member", "./msg", "./mship", "./mchatlogs", "./set-meta", "./ship", "./sync-event", "./sync-join", "./sync-link-pf", "./sync-link", "./sync-mem-t", "./sync-msg", "./write", "./invoice", "./create-openlink", "./update-openlink", "./lchat-list"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./chat-info"), exports);
    __exportStar(require("./chat-on-room"), exports);
    __exportStar(require("./chg-meta"), exports);
    __exportStar(require("./create"), exports);
    __exportStar(require("./decunread"), exports);
    __exportStar(require("./forward"), exports);
    __exportStar(require("./get-mem"), exports);
    __exportStar(require("./get-trailer"), exports);
    __exportStar(require("./info-link"), exports);
    __exportStar(require("./join-info"), exports);
    __exportStar(require("./kickout"), exports);
    __exportStar(require("./kl-sync"), exports);
    __exportStar(require("./left"), exports);
    __exportStar(require("./link-kicked"), exports);
    __exportStar(require("./login-list"), exports);
    __exportStar(require("./member"), exports);
    __exportStar(require("./msg"), exports);
    __exportStar(require("./mship"), exports);
    __exportStar(require("./mchatlogs"), exports);
    __exportStar(require("./set-meta"), exports);
    __exportStar(require("./ship"), exports);
    __exportStar(require("./sync-event"), exports);
    __exportStar(require("./sync-join"), exports);
    __exportStar(require("./sync-link-pf"), exports);
    __exportStar(require("./sync-link"), exports);
    __exportStar(require("./sync-mem-t"), exports);
    __exportStar(require("./sync-msg"), exports);
    __exportStar(require("./write"), exports);
    __exportStar(require("./invoice"), exports);
    __exportStar(require("./create-openlink"), exports);
    __exportStar(require("./update-openlink"), exports);
    __exportStar(require("./lchat-list"), exports);
});
//# sourceMappingURL=index.js.map