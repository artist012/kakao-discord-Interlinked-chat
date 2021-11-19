import { Long } from "bson";
export interface OAuthCredential {
    readonly userId: Long;
    readonly deviceUUID: string;
    readonly accessToken: string;
    readonly refreshToken: string;
}
export interface OAuthInfo {
    /**
     * Token type
     */
    type: string;
    credential: OAuthCredential;
    /**
     * OAuth token expires (secs)
     */
    expiresIn: number;
}
/**
 * Provides oauth credential data
 */
export interface CredentialProvider {
    getCredential(): OAuthCredential;
}
