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
    exports.MentionContent = void 0;
    /**
     * Mentions user
     */
    class MentionContent {
        constructor(user) {
            this.user = user;
        }
        append(chat) {
            if (!chat.attachment)
                return;
            if (!chat.attachment['mentions'])
                chat.attachment['mentions'] = [];
            const mentions = chat.attachment['mentions'];
            const lastAt = Math.max(0, ...mentions.map((value) => Math.max(0, ...value.at)));
            let map = mentions.find((value) => this.user.userId.eq(value.user_id));
            if (!map || map.len !== this.user.nickname.length) {
                map = {
                    user_id: this.user.userId,
                    len: this.user.nickname.length,
                    at: [],
                };
                mentions.push(map);
            }
            map.at.push(lastAt + 1);
            chat.text += `@${this.user.nickname}`;
        }
    }
    exports.MentionContent = MentionContent;
});
//# sourceMappingURL=mention.js.map