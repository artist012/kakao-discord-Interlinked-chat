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
    exports.ReplyContent = void 0;
    /**
     * Set reply chat
     */
    class ReplyContent {
        constructor(chat, attachOnly = false, attach) {
            this.chat = chat;
            this.attachOnly = attachOnly;
            this.attach = attach;
        }
        append(chat) {
            if (!chat.attachment)
                return;
            const attachment = chat.attachment;
            attachment.attach_only = this.attachOnly;
            if (this.attach) {
                attachment.attach_type = this.attach.type;
                Object.assign(chat.attachment, this.attach.attachment);
            }
            attachment.src_logId = this.chat.logId;
            attachment.src_mentions = this.chat.attachment && this.chat.attachment['mentions'] || [];
            attachment.src_message = this.chat.text;
            attachment.src_type = this.chat.type;
            attachment.src_userId = this.chat.sender.userId;
        }
    }
    exports.ReplyContent = ReplyContent;
});
//# sourceMappingURL=reply.js.map