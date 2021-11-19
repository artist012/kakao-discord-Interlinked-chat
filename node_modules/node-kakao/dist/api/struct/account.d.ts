import { Long } from 'bson';
export interface OpenChatSettingsStruct {
    chatMemberMaxJoin: number;
    chatRoomMaxJoin: number;
    createLinkLimit: 10;
    createCardLinkLimit: 3;
    numOfStaffLimit: 5;
    rewritable: boolean;
    handoverEnabled: boolean;
}
export interface MoreSettingsStruct {
    since: number;
    clientConf: {
        osVersion: string;
    };
    available: number;
    available2: number;
    friendsPollingInterval: number;
    settingsPollingInterval: number;
    profilePollingInterval: number;
    moreListPollingInterval: number;
    morePayPollingInterval: number;
    daumMediaPollingInterval: number;
    lessSettingsPollingInterval: number;
    moreApps: {
        recommend: unknown[];
        all: unknown[];
    };
    shortcuts: {
        [menu: string]: number;
    }[];
    seasonProfileRev: number;
    seasonNoticeRev: number;
    serviceUserId: Long | number;
    accountId: number;
    accountDisplayId: string;
    hashedAccountId: string;
    pstnNumber: string;
    formattedPstnNumber: string;
    nsnNumber: string;
    formattedNsnNumber: string;
    contactNameSync: number;
    allowMigration: boolean;
    emailStatus: number;
    emailAddress: string;
    emailVerified: boolean;
    uuid: string;
    uuidSearchable: boolean;
    nickName: string;
    openChat: OpenChatSettingsStruct;
    profileImageUrl: string;
    fullProfileImageUrl: string;
    originalProfileImageUrl: string;
    statusMessage: string;
}
export interface LessSettingsStruct {
    kakaoAutoLoginDomain: string[];
    daumSsoDomain: string[];
    googleMapsApi: {
        key: string;
        signature: string;
    };
    chat_report_limit: {
        chat: number;
        open_chat: number;
        plus_chat: number;
    };
    externalApiList: unknown;
    birthday_friends: {
        landing_url: string;
    };
    messageDeleteTime: number;
    voiceTalk: {
        groupCallMaxParticipants: number;
    };
    profileActions: boolean;
    postExpirationSetting: {
        flagOn: boolean;
        newPostTerm: number;
    };
    kakaoAlertIds: number[];
}
export interface LoginTokenStruct {
    token: string;
    expires: number;
}
