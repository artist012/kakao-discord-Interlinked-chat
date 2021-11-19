export declare const DefaultConfiguration: OAuthLoginConfig & ClientConfig;
export interface BookingConfig {
    locoBookingHost: string;
    locoBookingPort: number;
    agent: string;
    mccmnc: string;
    deviceModel: string;
}
export interface CheckinConfig extends BookingConfig {
    locoCheckinFallbackHost?: string;
    locoCheckinFallbackPort?: number;
    subDevice: boolean;
    appVersion: string;
    countryIso: string;
    language: string;
    netType: number;
    locoPEMPublicKey: string;
}
export interface WebApiConfig {
    agent: string;
    version: string;
    osVersion: string;
    language: string;
    deviceModel: string;
}
export declare type SessionConfig = CheckinConfig;
export interface ClientConfig extends SessionConfig, WebApiConfig {
    deviceType: number;
}
export interface OAuthLoginConfig extends WebApiConfig {
    loginTokenSeedList: [string, string];
}
