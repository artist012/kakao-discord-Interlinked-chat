/*
 * Created on Fri Feb 12 2021
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
    exports.KnownPostFooterStyle = exports.KnownPostSubItemType = exports.KnownPostItemType = void 0;
    var KnownPostItemType;
    (function (KnownPostItemType) {
        KnownPostItemType[KnownPostItemType["TEXT"] = 1] = "TEXT";
        KnownPostItemType[KnownPostItemType["FOOTER"] = 2] = "FOOTER";
        KnownPostItemType[KnownPostItemType["HEADER"] = 3] = "HEADER";
        KnownPostItemType[KnownPostItemType["EMOTICON"] = 4] = "EMOTICON";
        KnownPostItemType[KnownPostItemType["IMAGE"] = 5] = "IMAGE";
        KnownPostItemType[KnownPostItemType["VIDEO"] = 6] = "VIDEO";
        KnownPostItemType[KnownPostItemType["FILE"] = 7] = "FILE";
        KnownPostItemType[KnownPostItemType["SCHEDULE"] = 8] = "SCHEDULE";
        KnownPostItemType[KnownPostItemType["VOTE"] = 9] = "VOTE";
        KnownPostItemType[KnownPostItemType["SCRAP"] = 10] = "SCRAP";
    })(KnownPostItemType = exports.KnownPostItemType || (exports.KnownPostItemType = {}));
    var KnownPostSubItemType;
    (function (KnownPostSubItemType) {
    })(KnownPostSubItemType = exports.KnownPostSubItemType || (exports.KnownPostSubItemType = {}));
    var KnownPostFooterStyle;
    (function (KnownPostFooterStyle) {
        KnownPostFooterStyle[KnownPostFooterStyle["ARTICLE"] = 1] = "ARTICLE";
        KnownPostFooterStyle[KnownPostFooterStyle["SCHEDULE"] = 2] = "SCHEDULE";
        KnownPostFooterStyle[KnownPostFooterStyle["SCHEDULE_ANSWER"] = 3] = "SCHEDULE_ANSWER";
        KnownPostFooterStyle[KnownPostFooterStyle["VOTE"] = 4] = "VOTE";
        KnownPostFooterStyle[KnownPostFooterStyle["VOTE_RESULT"] = 5] = "VOTE_RESULT";
    })(KnownPostFooterStyle = exports.KnownPostFooterStyle || (exports.KnownPostFooterStyle = {}));
});
//# sourceMappingURL=post.js.map