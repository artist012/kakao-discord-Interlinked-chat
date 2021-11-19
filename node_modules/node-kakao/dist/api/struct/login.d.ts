import { Long } from 'bson';
import { LoginData } from '..';
/**
 * Raw login data
 */
export interface AccessDataStruct {
    userId: number | Long;
    countryIso: string;
    countryCode: string;
    accountId: number;
    server_time: number;
    resetUserData: boolean;
    story_url: string;
    access_token: string;
    refresh_token: string;
    token_type: string;
    autoLoginAccountId: string;
    displayAccountId: string;
    mainDeviceAgentName: string;
    mainDeviceAppVersion: string;
}
export declare function structToLoginData(struct: AccessDataStruct, deviceUUID: string): LoginData;
