import { SessionConfig } from '../config';
import { AsyncCommandResult, DefaultReq, DefaultRes } from '../request';
import { BiStream } from '../stream';
import { Long } from 'bson';
export interface CommandSession {
    /**
     * Request command response
     *
     * @param method method
     * @param data data
     */
    request<T = DefaultRes>(method: string, data: DefaultReq): Promise<DefaultRes & T>;
}
export interface ConnectionSession extends CommandSession {
    /**
     * Connection stream
     */
    readonly stream: BiStream;
    /**
     * Listen incoming packets
     */
    listen(): AsyncIterableIterator<PacketResData>;
}
export interface PacketResData {
    id: number;
    method: string;
    data: DefaultRes;
    push: boolean;
}
/**
 * Create connection using configuration.
 */
export interface SessionFactory {
    connect(userId: Long, config: SessionConfig): AsyncCommandResult<ConnectionSession>;
}
export declare class LocoSession implements ConnectionSession {
    private _assembler;
    private _codec;
    private _nextPromise;
    private _packetBuffer;
    private _requestSet;
    constructor(stream: BiStream);
    get stream(): BiStream;
    private _lastBufRes;
    private _readInner;
    private _readQueued;
    read(): Promise<PacketResData | undefined>;
    private _readId;
    listen(): AsyncIterableIterator<PacketResData>;
    request<T = DefaultRes>(method: string, data: DefaultReq): Promise<DefaultRes & T>;
}
