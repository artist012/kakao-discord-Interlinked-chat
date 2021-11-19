import { Long } from 'bson';
import { SessionConfig } from '../config';
import { ConnectionSession, PacketResData, SessionFactory } from '../network/request-session';
import { DefaultReq, AsyncCommandResult, DefaultRes } from '../request';
import { BiStream } from '../stream';
/**
 * Hook incoming datas
 */
export interface SessionHook {
    /**
     * Hook incoming data
     */
    onData: (method: string, data: DefaultRes, push: boolean) => void;
    /**
     * Hook command requests
     */
    onRequest: (method: string, data: DefaultReq) => void;
    onClose(): () => void;
}
/**
 * Hook created loco session
 */
export declare class HookedSessionFactory implements SessionFactory {
    private _factory;
    private _hook;
    constructor(_factory: SessionFactory, _hook?: Partial<SessionHook>);
    connect(userId: Long, config: SessionConfig): AsyncCommandResult<ConnectionSession>;
}
export declare class InspectSession implements ConnectionSession {
    private _session;
    private _hook;
    constructor(_session: ConnectionSession, _hook?: Partial<SessionHook>);
    get stream(): BiStream;
    request<T = DefaultRes>(method: string, data: DefaultReq): Promise<DefaultRes & T>;
    listen(): AsyncIterableIterator<PacketResData>;
}
