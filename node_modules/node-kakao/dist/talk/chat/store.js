/*
 * Created on Sun Mar 07 2021
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
    exports.TalkMemoryChatListStore = exports.EmptyChatListStore = void 0;
    const EMPTY_ITERATOR = {
        [Symbol.asyncIterator]() {
            return this;
        },
        async next() {
            return { done: true, value: null };
        }
    };
    exports.EmptyChatListStore = {
        async get() {
            return;
        },
        async last() {
            return;
        },
        before() {
            return EMPTY_ITERATOR;
        },
        since() {
            return EMPTY_ITERATOR;
        },
        all() {
            return EMPTY_ITERATOR;
        },
        async addChat() {
            return;
        },
        async updateChat() {
            return;
        },
        async removeChat() {
            return false;
        }
    };
    /**
     * Inmemory chat list with count limit
     */
    class TalkMemoryChatListStore {
        constructor(limit, _chatList = []) {
            this.limit = limit;
            this._chatList = _chatList;
        }
        findIndex(logId) {
            return this._chatList.findIndex((value) => logId.eq(value.logId));
        }
        makeIterator(slice) {
            const iter = slice[Symbol.iterator]();
            return {
                [Symbol.asyncIterator]() {
                    return this;
                },
                next: async () => {
                    return iter.next();
                }
            };
        }
        async get(logId) {
            const i = this.findIndex(logId);
            if (i < 0)
                return;
            return this._chatList[i];
        }
        async last() {
            if (this._chatList.length < 0)
                return;
            return this._chatList[this._chatList.length - 1];
        }
        before(logId, maxCount = this._chatList.length) {
            const start = this.findIndex(logId);
            const slice = start < 0 ? [] : this._chatList.slice(Math.max(0, start - maxCount), start);
            return this.makeIterator(slice);
        }
        since(time) {
            const start = this._chatList.findIndex((value) => value.sendAt >= time);
            const slice = start < 0 ? [] : this._chatList.slice(start);
            return this.makeIterator(slice);
        }
        all() {
            return this.makeIterator(this._chatList.slice());
        }
        async addChat(...chat) {
            if (this._chatList.length >= this.limit) {
                this._chatList = this._chatList.slice(this.limit - this._chatList.length + 1);
            }
            this._chatList.push(...chat);
            this._chatList.sort((a, b) => {
                return a.logId.comp(b.logId);
            });
        }
        async updateChat(logId, chat) {
            const i = this.findIndex(logId);
            if (i < 0 || !this._chatList[i])
                return;
            this._chatList[i] = { ...this._chatList[i], ...chat };
        }
        async removeChat(logId) {
            const i = this.findIndex(logId);
            if (i < 0)
                return false;
            this._chatList.splice(i, 1);
            return true;
        }
    }
    exports.TalkMemoryChatListStore = TalkMemoryChatListStore;
});
//# sourceMappingURL=store.js.map