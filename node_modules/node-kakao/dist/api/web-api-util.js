/*
 * Created on Sun Oct 13 2019
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
    exports.convertToFormData = void 0;
    function convertToFormData(form) {
        const formData = new URLSearchParams();
        for (const [key, value] of Object.entries(form)) {
            // hax for undefined, null values
            formData.append(key, value + '');
        }
        return formData;
    }
    exports.convertToFormData = convertToFormData;
});
//# sourceMappingURL=web-api-util.js.map