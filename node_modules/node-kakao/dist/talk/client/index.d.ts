import { CommandSession, SessionFactory } from '../../network';
import { ChannelUser, ChannelUserInfo } from '../../user';
import { AsyncCommandResult, DefaultReq, DefaultRes } from '../../request';
import { Managed } from '../managed';
import { OAuthCredential } from '../../oauth';
import { ClientConfig } from '../../config';
import { ClientSession, LoginResult } from '../../client';
import { EventContext, TypedEmitter } from '../../event';
import { ClientStatus } from '../../client-status';
import { TalkChannelList } from '../talk-channel-list';
import { ClientEvents } from '../event';
import { TalkBlockSession } from '../block';
import { TalkChannel } from '../channel';
import { ClientDataLoader } from '../../loader';
export * from './talk-client-session';
/**
 * Talk client session with client user
 */
export interface TalkSession extends CommandSession {
    readonly clientUser: Readonly<ChannelUser>;
    readonly configuration: Readonly<ClientConfig>;
}
declare type TalkClientEvents = ClientEvents<TalkChannel, ChannelUserInfo>;
/**
 * Simple client implementation.
 */
export declare class TalkClient extends TypedEmitter<TalkClientEvents> implements CommandSession, ClientSession, Managed<TalkClientEvents> {
    private _sessionFactory;
    private _session;
    /**
     * Ping request interval. (Default = 60000 (1 min))
     */
    pingInterval: number;
    private _pingTask;
    private _clientSession;
    private _clientUser;
    private _blockList;
    private _channelList;
    constructor(config?: Partial<ClientConfig>, loader?: ClientDataLoader, _sessionFactory?: SessionFactory);
    get configuration(): ClientConfig;
    set configuration(configuration: ClientConfig);
    get channelList(): TalkChannelList;
    get clientUser(): ChannelUser;
    get blockList(): TalkBlockSession;
    /**
     * true if session created
     */
    get logon(): boolean;
    private get session();
    login(credential: OAuthCredential): AsyncCommandResult<LoginResult>;
    setStatus(status: ClientStatus): AsyncCommandResult;
    getTokens(unknown: number[]): AsyncCommandResult<DefaultRes>;
    /**
     * @param {ChannelUser} user Target user to compare
     *
     * @return {boolean} true if client user.
     */
    isClientUser(user: ChannelUser): boolean;
    /**
     * End session
     */
    close(): void;
    pushReceived(method: string, data: DefaultRes, ctx: EventContext<TalkClientEvents>): Promise<void>;
    /**
     * Create proxy that can be used safely without exposing client
     *
     * @return {TalkSession}
     */
    createSessionProxy(): TalkSession;
    request<T = DefaultRes>(method: string, data: DefaultReq): Promise<DefaultRes & T>;
    private listenEnd;
    private onError;
    private listen;
    private addPingHandler;
}
