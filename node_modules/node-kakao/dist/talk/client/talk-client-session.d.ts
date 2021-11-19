import { TalkSession } from './index';
import { ClientStatus } from '../../client-status';
import { ClientSession, LoginResult } from '../../client';
import { OAuthCredential } from '../../oauth';
import { AsyncCommandResult, DefaultRes } from '../../request';
import { ClientConfig } from '../../config';
export declare class TalkClientSession implements ClientSession {
    private _session;
    configuration: ClientConfig;
    private _lastLoginRev;
    constructor(_session: TalkSession, configuration: ClientConfig);
    get session(): TalkSession;
    login(credential: OAuthCredential): AsyncCommandResult<LoginResult>;
    setStatus(status: ClientStatus): AsyncCommandResult;
    /**
     * Unknown
     *
     * @param {number[]} unknown
     * @return {AsyncCommandResult<DefaultRes>}
     */
    getTokens(unknown: number[]): AsyncCommandResult<DefaultRes>;
}
