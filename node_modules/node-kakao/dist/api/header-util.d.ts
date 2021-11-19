import { RequestHeader } from '.';
import { WebApiConfig } from '../config';
import { OAuthCredential } from '../oauth';
export declare function fillAHeader(header: RequestHeader, config: WebApiConfig): void;
export declare function fillBaseHeader(header: RequestHeader, config: WebApiConfig): void;
export declare function getUserAgent(config: WebApiConfig): string;
export declare function fillCredential(header: RequestHeader, credential: OAuthCredential): void;
