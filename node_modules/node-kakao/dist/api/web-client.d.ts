import { Long } from 'bson';
import { WebApiConfig } from '../config';
import { OAuthCredential } from '../oauth';
import { DefaultRes } from '../request';
export declare type RequestHeader = Record<string, string>;
export declare type RequestMethod = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'LINK' | 'UNLINK';
export declare type FileRequestData = {
    value: Uint8Array;
    options: {
        filename: string;
        contentType?: string;
    };
};
export declare type RequestForm = {
    [key: string]: FileRequestData | number | string | undefined | null | boolean | Long;
};
/**
 * Provides various web request api
 */
export interface WebClient extends HeaderDecorator {
    /**
     * Returns url
     */
    readonly url: string;
    /**
     * Request with optional form and header overrides
     * @param method
     * @param path
     * @param form
     * @param headers
     */
    request(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
    /**
     * Request multipart form
     *
     * @param method
     * @param path
     * @param form
     * @param headers
     */
    requestMultipart(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
}
export declare class TextWebRequest<T extends WebClient = WebClient> {
    private _client;
    constructor(_client: T);
    get client(): T;
    requestText(method: RequestMethod, path: string, form?: RequestForm, headers?: Record<string, string>): Promise<string>;
    requestMultipartText(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<string>;
}
export declare class DataWebRequest<T extends WebClient = WebClient> {
    private _client;
    constructor(client: T);
    get client(): T;
    requestData(method: RequestMethod, path: string, form?: RequestForm, headers?: Record<string, string>): Promise<DefaultRes>;
    requestMultipartData(method: RequestMethod, path: string, form?: RequestForm, headers?: Record<string, string>): Promise<DefaultRes>;
}
/**
 * Api client with credential
 */
export declare class SessionWebClient implements WebClient {
    private _client;
    private _credential;
    config: WebApiConfig;
    constructor(_client: WebClient, _credential: OAuthCredential, config: WebApiConfig);
    fillHeader(header: Record<string, string>): void;
    get url(): string;
    private createSessionHeader;
    request(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
    requestMultipart(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
}
/**
 * Decorate common request headers
 */
export interface HeaderDecorator {
    fillHeader(header: RequestHeader): void;
}
/**
 * Create web client by platform
 *
 * @param {string} scheme
 * @param {string} host
 * @param {HeaderDecorator} decorator
 */
export declare function createWebClient(scheme: string, host: string, decorator?: HeaderDecorator): Promise<WebClient>;
export declare function createSessionWebClient(credential: OAuthCredential, config: WebApiConfig, scheme: string, host: string, decorator?: HeaderDecorator): Promise<SessionWebClient>;
