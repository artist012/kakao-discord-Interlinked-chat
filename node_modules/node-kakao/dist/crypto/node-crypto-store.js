/*
 * Created on Sat Jan 30 2021
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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "crypto"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createNodeCrypto = void 0;
    const crypto = __importStar(require("crypto"));
    async function createNodeCrypto(pubKey) {
        const key = crypto.randomBytes(16);
        const store = {
            toAESEncrypted(buffer, iv) {
                const cipher = crypto.createCipheriv('aes-128-cfb', key, iv);
                const encrypted = cipher.update(buffer);
                const final = cipher.final();
                const res = new Uint8Array(encrypted.byteLength + final.byteLength);
                res.set(encrypted, 0);
                res.set(final, encrypted.byteLength);
                return res;
            },
            toAESDecrypted(buffer, iv) {
                const cipher = crypto.createDecipheriv('aes-128-cfb', key, iv);
                const decrypted = cipher.update(buffer);
                const final = cipher.final();
                const res = new Uint8Array(decrypted.byteLength + final.byteLength);
                res.set(decrypted, 0);
                res.set(final, decrypted.byteLength);
                return res;
            },
            toRSAEncrypted(buffer) {
                return crypto.publicEncrypt(pubKey, buffer);
            },
            randomCipherIV() {
                return crypto.randomBytes(16);
            },
            getRSAEncryptedKey() {
                return this.toRSAEncrypted(key);
            },
        };
        return store;
    }
    exports.createNodeCrypto = createNodeCrypto;
});
//# sourceMappingURL=node-crypto-store.js.map