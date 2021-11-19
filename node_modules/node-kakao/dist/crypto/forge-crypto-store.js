/*
 * Created on Thu Jan 28 2021
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
        define(["require", "exports", "node-forge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createForgeCrypto = void 0;
    const forge = __importStar(require("node-forge"));
    async function createForgeCrypto(pubKey) {
        const publicKey = forge.pki.publicKeyFromPem(pubKey);
        const key = forge.random.getBytesSync(16);
        return {
            toAESEncrypted(buffer, iv) {
                const cipher = forge.cipher.createCipher('AES-CFB', key);
                cipher.start({ iv: forge.util.binary.raw.encode(iv) });
                cipher.update(new forge.util.ByteStringBuffer(buffer));
                cipher.finish();
                const array = forge.util.binary.raw.decode(cipher.output.data);
                return array;
            },
            toAESDecrypted(buffer, iv) {
                const cipher = forge.cipher.createDecipher('AES-CFB', key);
                cipher.start({ iv: forge.util.binary.raw.encode(iv) });
                cipher.update(new forge.util.ByteStringBuffer(buffer));
                const array = forge.util.binary.raw.decode(cipher.output.data);
                return array;
            },
            toRSAEncrypted(buffer) {
                const encrypted = publicKey.encrypt(new forge.util.ByteStringBuffer(buffer).data, 'RSA-OAEP');
                return forge.util.binary.raw.decode(encrypted);
            },
            randomCipherIV() {
                const buffer = new Uint8Array(16);
                forge.util.binary.raw.decode(forge.random.getBytesSync(16), buffer);
                return buffer;
            },
            getRSAEncryptedKey() {
                const encrypted = publicKey.encrypt(new forge.util.ByteStringBuffer(key).data, 'RSA-OAEP');
                return forge.util.binary.raw.decode(encrypted);
            },
        };
    }
    exports.createForgeCrypto = createForgeCrypto;
});
//# sourceMappingURL=forge-crypto-store.js.map