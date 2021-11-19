import { Long } from 'bson';
import { WebClient } from './web-client';
import { OAuthLoginConfig } from '../config';
import { OAuthCredential } from '../oauth';
import { AsyncCommandResult } from '../request';
import { XVCProvider } from './xvc';
/**
 * Login data
 */
export interface LoginData extends OAuthCredential {
    /**
     * User id
     */
    userId: Long;
    /**
     * Country iso
     */
    countryIso: string;
    /**
     * Country code
     */
    countryCode: string;
    /**
     * Account id
     */
    accountId: number;
    /**
     * Login server time
     */
    serverTime: number;
    /**
     * true if user data should be reset
     */
    resetUserData: boolean;
    /**
     * Story URL
     */
    storyURL: string;
    /**
     * OAuth token type
     */
    tokenType: string;
    /**
     * Auto login account id
     */
    autoLoginAccountId: string;
    /**
     * Displayed account id
     */
    displayAccountId: string;
    /**
     * Main device agent
     */
    mainDeviceAgentName: string;
    /**
     * Main device app version
     */
    mainDeviceAppVersion: string;
}
export interface LoginForm {
    email: string;
    password: string;
    forced?: boolean;
}
export interface TokenLoginForm extends LoginForm {
    autowithlock: boolean;
}
/**
 * Status code for auth client results
 */
export declare enum KnownAuthStatusCode {
    LOGIN_FAILED_REASON = 12,
    TOO_MANY_TRY_LOGIN = 13,
    LOGIN_FAILED = 30,
    MOBILE_UNREGISTERED = 32,
    DEVICE_NOT_REGISTERED = -100,
    ANOTHER_LOGON = -101,
    DEVICE_REGISTER_FAILED = -102,
    INVALID_DEVICE_REGISTER = -110,
    INCORRECT_PASSCODE = -111,
    PASSCODE_REQUEST_FAILED = -112,
    ACCOUNT_RESTRICTED = -997
}
/**
 * Provides default pc login api which can obtain OAuthCredential
 */
export declare class AuthApiClient {
    private _name;
    private _deviceUUID;
    config: OAuthLoginConfig;
    xvcProvider: XVCProvider;
    private _client;
    constructor(client: WebClient, _name: string, _deviceUUID: string, config: OAuthLoginConfig, xvcProvider: XVCProvider);
    get name(): string;
    get deviceUUID(): string;
    private createAuthHeader;
    private fillAuthForm;
    /**
     * Login using given data.
     *
     * @param {LoginForm} form
     */
    login(form: LoginForm): AsyncCommandResult<LoginData>;
    /**
     * Login using token.
     *
     * @param {TokenLoginForm} form
     */
    loginToken(form: TokenLoginForm): AsyncCommandResult<LoginData>;
    /**
     * Request passcode
     *
     * @param {LoginForm} form
     */
    requestPasscode(form: LoginForm): AsyncCommandResult;
    /**
     * Try to register device with passcode
     *
     * @param {LoginForm} form
     * @param {string} passcode
     * @param {boolean} [permanent=true] If true the device will be registered as permanent
     */
    registerDevice(form: LoginForm, passcode: string, permanent?: boolean): AsyncCommandResult;
    private calculateXVCKey;
    private getApiPath;
    /**
     * Create default AuthClient using config.
     *
     * @param {string} name
     * @param {string} deviceUUID
     * @param {Partial<OAuthLoginConfig>} config
     * @param {XVCProvider} [xvcProvider]
     */
    static create(name: string, deviceUUID: string, config?: Partial<OAuthLoginConfig>, xvcProvider?: XVCProvider): Promise<AuthApiClient>;
}
