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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./api", "./api", "./channel", "./chat", "./client", "./client-status", "./config", "./crypto", "./event", "./hook", "./network", "./oauth", "./openlink", "./packet", "./relay", "./request", "./stream", "./talk", "./talk", "./user", "./util", "./voip", "./loader", "bson", "./talk"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TalkClient = exports.Long = exports.util = exports.TalkChatData = exports.TalkNormalChannel = exports.TalkOpenChannel = exports.talk = exports.stream = exports.packet = exports.network = exports.event = exports.crypto = exports.xvc = exports.AttachmentApi = exports.AttachmentApiClient = exports.OAuthApiClient = exports.ServiceApiClient = exports.KnownAuthStatusCode = exports.AuthApiClient = exports.api = void 0;
    exports.api = __importStar(require("./api"));
    var api_1 = require("./api");
    Object.defineProperty(exports, "AuthApiClient", { enumerable: true, get: function () { return api_1.AuthApiClient; } });
    Object.defineProperty(exports, "KnownAuthStatusCode", { enumerable: true, get: function () { return api_1.KnownAuthStatusCode; } });
    Object.defineProperty(exports, "ServiceApiClient", { enumerable: true, get: function () { return api_1.ServiceApiClient; } });
    Object.defineProperty(exports, "OAuthApiClient", { enumerable: true, get: function () { return api_1.OAuthApiClient; } });
    Object.defineProperty(exports, "AttachmentApiClient", { enumerable: true, get: function () { return api_1.AttachmentApiClient; } });
    Object.defineProperty(exports, "AttachmentApi", { enumerable: true, get: function () { return api_1.AttachmentApi; } });
    Object.defineProperty(exports, "xvc", { enumerable: true, get: function () { return api_1.xvc; } });
    __exportStar(require("./channel"), exports);
    __exportStar(require("./chat"), exports);
    __exportStar(require("./client"), exports);
    __exportStar(require("./client-status"), exports);
    __exportStar(require("./config"), exports);
    exports.crypto = __importStar(require("./crypto"));
    exports.event = __importStar(require("./event"));
    __exportStar(require("./hook"), exports);
    exports.network = __importStar(require("./network"));
    __exportStar(require("./oauth"), exports);
    __exportStar(require("./openlink"), exports);
    exports.packet = __importStar(require("./packet"));
    __exportStar(require("./relay"), exports);
    __exportStar(require("./request"), exports);
    exports.stream = __importStar(require("./stream"));
    exports.talk = __importStar(require("./talk"));
    var talk_1 = require("./talk");
    Object.defineProperty(exports, "TalkOpenChannel", { enumerable: true, get: function () { return talk_1.TalkOpenChannel; } });
    Object.defineProperty(exports, "TalkNormalChannel", { enumerable: true, get: function () { return talk_1.TalkNormalChannel; } });
    Object.defineProperty(exports, "TalkChatData", { enumerable: true, get: function () { return talk_1.TalkChatData; } });
    __exportStar(require("./user"), exports);
    exports.util = __importStar(require("./util"));
    __exportStar(require("./voip"), exports);
    __exportStar(require("./loader"), exports);
    var bson_1 = require("bson");
    Object.defineProperty(exports, "Long", { enumerable: true, get: function () { return bson_1.Long; } });
    var talk_2 = require("./talk");
    Object.defineProperty(exports, "TalkClient", { enumerable: true, get: function () { return talk_2.TalkClient; } });
});
//# sourceMappingURL=index.js.map