/*
 * Created on Fri Feb 05 2021
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
    exports.AttachmentContent = exports.TextContent = void 0;
    /**
     * Append text
     */
    class TextContent {
        constructor(text) {
            this.text = text;
        }
        append(chat) {
            chat.text += this.text;
        }
    }
    exports.TextContent = TextContent;
    /**
     * Append attachment
     */
    class AttachmentContent {
        constructor(attachment) {
            this.attachment = attachment;
        }
        append(chat) {
            if (!chat.attachment)
                return;
            chat.attachment = Object.assign(chat.attachment, this.attachment);
        }
    }
    exports.AttachmentContent = AttachmentContent;
});
//# sourceMappingURL=default.js.map