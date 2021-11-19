/*
 * Created on Thu Feb 18 2021
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
    exports.getEmoticonThumbnailPackURL = exports.getEmoticonPackURL = exports.getEmoticonTitleURL = exports.getEmoticonImageURL = exports.getEmoticonURL = exports.getEmoticonHeader = void 0;
    function getEmoticonHeader(screenWidth = 1080, screenHeight = 1920) {
        return {
            RESOLUTION: `${screenWidth}x${screenHeight}`,
        };
    }
    exports.getEmoticonHeader = getEmoticonHeader;
    function getEmoticonURL(lang = 'kr') {
        return `http://item-${lang}.talk.kakao.co.kr/dw`;
    }
    exports.getEmoticonURL = getEmoticonURL;
    function getEmoticonImageURL(path, lang = 'kr') {
        return `${getEmoticonURL(lang)}/${path}`;
    }
    exports.getEmoticonImageURL = getEmoticonImageURL;
    function getEmoticonTitleURL(id, type = 'png', lang = 'kr') {
        return `${getEmoticonURL(lang)}/${id}.title.${type}`;
    }
    exports.getEmoticonTitleURL = getEmoticonTitleURL;
    function getEmoticonPackURL(id, lang = 'kr') {
        return `${getEmoticonURL(lang)}/${id}.file_pack.zip`;
    }
    exports.getEmoticonPackURL = getEmoticonPackURL;
    function getEmoticonThumbnailPackURL(id, lang = 'kr') {
        return `${getEmoticonURL(lang)}/${id}.thum_pack.zip`;
    }
    exports.getEmoticonThumbnailPackURL = getEmoticonThumbnailPackURL;
});
//# sourceMappingURL=service-api-util.js.map