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
        define(["require", "exports", "bson", "lossless-json"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonUtil = void 0;
    const bson_1 = require("bson");
    const LosslessJSON = __importStar(require("lossless-json"));
    /*
     * Created on Wed Oct 30 2019
     *
     * Copyright (c) storycraft. Licensed under the MIT Licence.
     */
    var JsonUtil;
    (function (JsonUtil) {
        const bsonLongReviver = (key, value) => {
            if (typeof value === 'object' && value && 'isLosslessNumber' in value) {
                try {
                    return value.valueOf();
                }
                catch (e) {
                    return bson_1.Long.fromString(value.toString());
                }
            }
            return value;
        };
        const bsonLongReplacer = (key, value) => {
            if (typeof value === 'bigint' || bson_1.Long.isLong(value)) {
                return new LosslessJSON.LosslessNumber(value.toString());
            }
            return value;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function parseLoseless(obj) {
            return LosslessJSON.parse(obj, bsonLongReviver);
        }
        JsonUtil.parseLoseless = parseLoseless;
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        function stringifyLoseless(obj) {
            return LosslessJSON.stringify(obj, bsonLongReplacer);
        }
        JsonUtil.stringifyLoseless = stringifyLoseless;
    })(JsonUtil = exports.JsonUtil || (exports.JsonUtil = {}));
});
//# sourceMappingURL=json-util.js.map