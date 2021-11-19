/*
 * Created on Fri Jan 22 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.structToChatlog = void 0;
    const util_1 = require("../../../util");
    function structToChatlog(struct) {
        const chat = {
            type: struct.type,
            logId: struct.logId,
            prevLogId: struct.prevId,
            sender: { userId: struct.authorId },
            sendAt: struct.sendAt * 1000,
            messageId: struct.msgId,
        };
        if (struct.message) {
            chat['text'] = struct.message;
        }
        if (struct.attachment) {
            chat['attachment'] = util_1.JsonUtil.parseLoseless(struct.attachment);
        }
        if (struct.supplement) {
            chat['supplement'] = util_1.JsonUtil.parseLoseless(struct.supplement);
        }
        return chat;
    }
    exports.structToChatlog = structToChatlog;
});
//# sourceMappingURL=chat.js.map