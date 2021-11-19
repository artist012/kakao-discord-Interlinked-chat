/*
 * Created on Sun Mar 21 2021
 *
 * Copyright (c) storycraft. Licensed under the GNU Lesser General Public License v3.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../event", "./talk-open-link-handler", "./talk-open-link-session"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TalkClientLinkStore = void 0;
    const event_1 = require("../../event");
    const talk_open_link_handler_1 = require("./talk-open-link-handler");
    const talk_open_link_session_1 = require("./talk-open-link-session");
    class TalkClientLinkStore extends event_1.TypedEmitter {
        constructor(session, clientLinkList) {
            super();
            this._linkSession = new talk_open_link_session_1.TalkOpenLinkSession(session);
            this._linkHandler = new talk_open_link_handler_1.TalkOpenLinkHandler(this, this, this);
            this._map = new Map();
            if (clientLinkList.length > 0) {
                clientLinkList.forEach((link) => this._map.set(link.openLink.linkId.toString(), link));
            }
        }
        async getLatestLinkList() {
            const res = await this._linkSession.getLatestLinkList();
            if (res.success) {
                const clientMap = new Map();
                res.result.forEach((link) => clientMap.set(link.openLink.linkId.toString(), link));
                this._map = clientMap;
            }
            return res;
        }
        getOpenLink(...components) {
            return this._linkSession.getOpenLink(...components);
        }
        getJoinInfo(linkURL, referer) {
            return this._linkSession.getJoinInfo(linkURL, referer);
        }
        getKickList(link) {
            return this._linkSession.getKickList(link);
        }
        removeKicked(link, kickedUser) {
            return this._linkSession.removeKicked(link, kickedUser);
        }
        async deleteLink(link) {
            const res = await this._linkSession.deleteLink(link);
            if (res.success) {
                this.deleteClientLink(link.linkId);
            }
            return res;
        }
        react(link, flag) {
            return this._linkSession.react(link, flag);
        }
        getReaction(link) {
            return this._linkSession.getReaction(link);
        }
        async createOpenChannel(template, profile) {
            return this._linkSession.createOpenChannel(template, profile);
        }
        async createOpenDirectProfile(template, profile) {
            const res = await this._linkSession.createOpenDirectProfile(template, profile);
            if (res.success) {
                const link = res.result;
                this._map.set(link.openLink.linkId.toString(), link);
            }
            return res;
        }
        async createOpenProfile(template) {
            const res = await this._linkSession.createOpenProfile(template);
            if (res.success) {
                const link = res.result;
                this._map.set(link.openLink.linkId.toString(), link);
            }
            return res;
        }
        async updateOpenLink(link, settings) {
            const res = await this._linkSession.updateOpenLink(link, settings);
            if (res.success) {
                const link = res.result;
                const clientProfile = this.getClientLink(link.openLink.linkId);
                if (clientProfile) {
                    this._map.set(link.openLink.linkId.toString(), link);
                }
            }
            return res;
        }
        addClientLink(link) {
            this._map.set(link.openLink.linkId.toString(), link);
        }
        deleteClientLink(linkId) {
            return this._map.delete(linkId.toString());
        }
        allClientLink() {
            return this._map.values();
        }
        getClientLink(linkId) {
            return this._map.get(linkId.toString());
        }
        get clientLinkCount() {
            return this._map.size;
        }
        pushReceived(method, data, parentCtx) {
            return this._linkHandler.pushReceived(method, data, parentCtx);
        }
    }
    exports.TalkClientLinkStore = TalkClientLinkStore;
});
//# sourceMappingURL=client-link-store.js.map