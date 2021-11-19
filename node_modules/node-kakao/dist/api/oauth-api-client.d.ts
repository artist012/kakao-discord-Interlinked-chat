import { WebApiConfig } from '../config';
import { OAuthCredential, OAuthInfo } from '../oauth';
import { AsyncCommandResult } from '../request';
import { WebClient } from './web-client';
export declare class OAuthApiClient {
    config: WebApiConfig;
    private _client;
    constructor(client: WebClient, config: WebApiConfig);
    private createOAuthHeader;
    /**
     * Renew oauth credential using refresh token
     *
     * @param {OAuthCredential} credential
     */
    renew(credential: OAuthCredential): AsyncCommandResult<OAuthInfo>;
    /**
     * Create default OAuthApiClient using credential and config.
     *
     * @param {Partial<WebApiConfig>} config
     */
    static create(config?: Partial<WebApiConfig>): Promise<OAuthApiClient>;
}
