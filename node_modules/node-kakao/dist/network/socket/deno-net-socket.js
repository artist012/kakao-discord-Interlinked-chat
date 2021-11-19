/*
 * Created on Fri Jan 29 2021
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
    exports.DenoSocket = void 0;
    class DenoSocket {
        constructor(_conn) {
            this._conn = _conn;
            this._ended = false;
        }
        get ended() {
            return this._ended;
        }
        read(buffer) {
            return this._conn.read(buffer);
        }
        write(data) {
            return this._conn.write(data);
        }
        close() {
            this._conn.close();
            this._ended = true;
        }
        static async connect(option) {
            return new DenoSocket(await Deno.connect({ hostname: option.host, port: option.port }));
        }
        static async connectTls(option) {
            return new DenoSocket(await Deno.connectTls({ hostname: option.host, port: option.port }));
        }
    }
    exports.DenoSocket = DenoSocket;
});
//# sourceMappingURL=deno-net-socket.js.map