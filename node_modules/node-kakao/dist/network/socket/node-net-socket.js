/*
 * Created on Sun Jan 17 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "net", "tls", "promise-socket", "../chunk"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeSocket = void 0;
    const net = __importStar(require("net"));
    const tls = __importStar(require("tls"));
    const promise_socket_1 = require("promise-socket");
    const chunk_1 = require("../chunk");
    class NodeSocket {
        constructor(socket) {
            this._socket = new promise_socket_1.PromiseSocket(socket);
            this._ended = false;
            this._chunks = new chunk_1.ChunkedArrayBufferList();
        }
        async read(buffer) {
            if (this._chunks.byteLength < buffer.byteLength) {
                const chunk = await this._socket.read();
                if (!chunk)
                    return null;
                this._chunks.append(chunk);
            }
            const data = this._chunks.toBuffer();
            this._chunks.clear();
            let view = data;
            if (data.byteLength > buffer.byteLength) {
                this._chunks.append(data.subarray(buffer.byteLength));
                view = data.subarray(0, buffer.byteLength);
            }
            buffer.set(view, 0);
            return view.byteLength;
        }
        get ended() {
            return this._ended;
        }
        write(data) {
            return this._socket.write(Buffer.from(data));
        }
        close() {
            if (this._ended)
                throw new Error('Tried to close socket already closed');
            this._ended = true;
            this._socket.end();
        }
        static connect(option) {
            return new Promise((resolve, reject) => {
                const onErr = (err) => {
                    reject(err);
                };
                const socket = net.connect(option, () => {
                    socket.off('error', onErr);
                    resolve(new NodeSocket(socket));
                });
                socket.setKeepAlive(option.keepAlive);
                socket.on('error', onErr);
            });
        }
        static connectTls(option) {
            return new Promise((resolve, reject) => {
                const onErr = (err) => {
                    reject(err);
                };
                const socket = tls.connect(option, () => {
                    socket.off('error', onErr);
                    resolve(new NodeSocket(socket));
                });
                socket.setKeepAlive(option.keepAlive);
                socket.on('error', onErr);
            });
        }
    }
    exports.NodeSocket = NodeSocket;
});
//# sourceMappingURL=node-net-socket.js.map