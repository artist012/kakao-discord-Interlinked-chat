/*
 * Created on Mon Jan 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./content"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChatBuilder = void 0;
    const content_1 = require("./content");
    /**
     * Build Chat object from existing chat or create new.
     */
    class ChatBuilder {
        constructor() {
            this._contents = [];
        }
        /**
         * Append text.
         * this is equivalent of calling builder.append(new TextContent(text));
         *
         * @param {string} text
         * @return {this}
         */
        text(text) {
            return this.append(new content_1.TextContent(text));
        }
        /**
         * Append attachment.
         * this is equivalent of calling builder.append(new AttachmentContent(attachment));
         *
         * @param {Record<string, unknown>} attachment
         * @return {this}
         */
        attachment(attachment) {
            return this.append(new content_1.AttachmentContent(attachment));
        }
        /**
         * Append chat content.
         *
         * @param {ChatContent} content
         * @return {this}
         */
        append(content) {
            this._contents.push(content);
            return this;
        }
        /**
         * Set shout option.
         * Only have visual effect on open channel.
         *
         * @param {boolean} flag
         * @return {this}
         */
        shout(flag) {
            return this.attachment({ shout: flag });
        }
        /**
         * Build into chat object from existing chat or with type.
         *
         * @param {Chat | ChatType} data
         * @return {Chat}
         */
        build(data) {
            let chat;
            if (typeof data === 'object') {
                chat = data;
            }
            else if (typeof data === 'number') {
                chat = {
                    type: data,
                    text: '',
                    attachment: {},
                };
            }
            else {
                throw new Error('Unknown ChatType or Chat object supplied');
            }
            if (!chat.attachment)
                chat.attachment = {};
            for (const content of this._contents) {
                content.append(chat);
            }
            return chat;
        }
    }
    exports.ChatBuilder = ChatBuilder;
});
//# sourceMappingURL=chat-builder.js.map