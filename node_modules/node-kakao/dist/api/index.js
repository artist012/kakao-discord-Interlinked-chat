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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./web-client", "./xvc", "./struct", "./auth-api-client", "./service-api-client", "./oauth-api-client", "./attachment-api-client", "./open-upload-api-client", "./web-api-util", "./header-util", "./service-api-util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serviceApiUtil = exports.headerUtil = exports.webApiUtil = exports.struct = exports.xvc = void 0;
    __exportStar(require("./web-client"), exports);
    exports.xvc = __importStar(require("./xvc"));
    exports.struct = __importStar(require("./struct"));
    __exportStar(require("./auth-api-client"), exports);
    __exportStar(require("./service-api-client"), exports);
    __exportStar(require("./oauth-api-client"), exports);
    __exportStar(require("./attachment-api-client"), exports);
    __exportStar(require("./open-upload-api-client"), exports);
    exports.webApiUtil = __importStar(require("./web-api-util"));
    exports.headerUtil = __importStar(require("./header-util"));
    exports.serviceApiUtil = __importStar(require("./service-api-util"));
});
//# sourceMappingURL=index.js.map