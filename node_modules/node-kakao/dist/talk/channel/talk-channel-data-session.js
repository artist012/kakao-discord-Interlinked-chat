/*
 * Created on Sat Mar 06 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../chat"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TalkChannelDataSession = void 0;
    const chat_1 = require("../../chat");
    class TalkChannelDataSession {
        constructor(_clientUser, _channelSession, _store, _chatListStore) {
            this._clientUser = _clientUser;
            this._channelSession = _channelSession;
            this._store = _store;
            this._chatListStore = _chatListStore;
        }
        get clientUser() {
            return this._clientUser;
        }
        get store() {
            return this._store;
        }
        async sendChat(chat, noSeen) {
            const res = await this._channelSession.sendChat(chat, noSeen);
            if (res.success) {
                await this._chatListStore.addChat(res.result);
                this._store.updateInfo({ lastChatLogId: res.result.logId, lastChatLog: res.result });
            }
            return res;
        }
        async forwardChat(chat, noSeen) {
            const res = await this._channelSession.forwardChat(chat, noSeen);
            if (res.success) {
                await this._chatListStore.addChat(res.result);
                this._store.updateInfo({ lastChatLogId: res.result.logId, lastChatLog: res.result });
            }
            return res;
        }
        async deleteChat(chat) {
            const res = await this._channelSession.deleteChat(chat);
            if (res.success) {
                const deleted = await this._chatListStore.get(chat.logId);
                if (deleted) {
                    await this._chatListStore.updateChat(chat.logId, {
                        type: deleted.type | chat_1.DELETED_MESSAGE_OFFSET
                    });
                }
            }
            return res;
        }
        async markRead(chat) {
            const res = await this._channelSession.markRead(chat);
            if (res.success) {
                this._store.updateWatermark(this._clientUser.userId, chat.logId);
            }
            return res;
        }
        async setMeta(type, meta) {
            var _a;
            const res = await this._channelSession.setMeta(type, meta);
            if (res.success) {
                const lastInfoMap = (_a = this._store.info) === null || _a === void 0 ? void 0 : _a.metaMap;
                this._store.updateInfo({
                    metaMap: {
                        ...lastInfoMap,
                        [type]: res.result
                    }
                });
            }
            return res;
        }
        async setPushAlert(flag) {
            const res = await this._channelSession.setPushAlert(flag);
            if (res.success) {
                this._store.updateInfo({ pushAlert: flag });
            }
            return res;
        }
        syncChatList(endLogId, startLogId) {
            const iterator = this._channelSession.syncChatList(endLogId, startLogId);
            return {
                [Symbol.asyncIterator]() {
                    return this;
                },
                next: async () => {
                    const next = await iterator.next();
                    if (next.done || !next.value.success)
                        return next;
                    const res = next.value.result;
                    this._chatListStore.addChat(...res);
                    return next;
                }
            };
        }
        async getChatListFrom(startLogId) {
            const res = await this._channelSession.getChatListFrom(startLogId);
            if (res.success) {
                this._chatListStore.addChat(...res.result);
            }
            return res;
        }
        downloadMedia(media, type, offset) {
            return this._channelSession.downloadMedia(media, type, offset);
        }
        downloadMediaThumb(media, type, offset) {
            return this._channelSession.downloadMediaThumb(media, type, offset);
        }
        async uploadMedia(type, form) {
            const res = await this._channelSession.uploadMedia(type, form);
            if (!res.success)
                return res;
            return {
                status: res.status,
                success: true,
                result: {
                    offset: res.result.offset,
                    stream: res.result.stream,
                    finish: async () => {
                        const chatlogRes = await res.result.finish();
                        if (chatlogRes.success) {
                            this._chatListStore.addChat(chatlogRes.result);
                        }
                        return chatlogRes;
                    }
                }
            };
        }
        async uploadMultiMedia(type, forms) {
            const res = await this._channelSession.uploadMultiMedia(type, forms);
            if (!res.success)
                return res;
            return {
                status: res.status,
                success: true,
                result: {
                    entries: res.result.entries,
                    finish: async () => {
                        const chatlogRes = await res.result.finish();
                        if (chatlogRes.success) {
                            this._chatListStore.addChat(chatlogRes.result);
                        }
                        return chatlogRes;
                    }
                }
            };
        }
    }
    exports.TalkChannelDataSession = TalkChannelDataSession;
});
//# sourceMappingURL=talk-channel-data-session.js.map