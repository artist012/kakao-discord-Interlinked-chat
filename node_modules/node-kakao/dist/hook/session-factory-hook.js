/*
 * Created on Sun Jan 24 2021
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
    exports.InspectSession = exports.HookedSessionFactory = void 0;
    /**
     * Hook created loco session
     */
    class HookedSessionFactory {
        constructor(_factory, _hook = {}) {
            this._factory = _factory;
            this._hook = _hook;
        }
        async connect(userId, config) {
            const sessionRes = await this._factory.connect(userId, config);
            if (!sessionRes.success)
                return sessionRes;
            return { status: sessionRes.status, success: true, result: new InspectSession(sessionRes.result, this._hook) };
        }
    }
    exports.HookedSessionFactory = HookedSessionFactory;
    class InspectSession {
        constructor(_session, _hook = {}) {
            this._session = _session;
            this._hook = _hook;
        }
        get stream() {
            return this._session.stream;
        }
        request(method, data) {
            if (this._hook.onRequest)
                this._hook.onRequest(method, data);
            return this._session.request(method, data);
        }
        listen() {
            const iterator = this._session.listen();
            return {
                [Symbol.asyncIterator]() {
                    return this;
                },
                next: async () => {
                    const next = await iterator.next();
                    if (!next.done && this._hook.onData) {
                        this._hook.onData(next.value.method, next.value.data, next.value.push);
                    }
                    return next;
                }
            };
        }
    }
    exports.InspectSession = InspectSession;
});
//# sourceMappingURL=session-factory-hook.js.map