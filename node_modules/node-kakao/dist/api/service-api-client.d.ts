import { Long } from 'bson';
import { SessionWebClient } from './web-client';
import { WebApiConfig } from '../config';
import { OAuthCredential } from '../oauth';
import { AsyncCommandResult, DefaultRes } from '../request';
import { FriendFindIdStruct, FriendFindUUIDStruct, FriendListStruct, FriendReqPhoneNumberStruct, FriendReqStruct, FriendSearchStruct, LessSettingsStruct, LoginTokenStruct, MoreSettingsStruct, ProfileReqStruct } from './struct';
export declare class ServiceApiClient {
    private _client;
    constructor(client: SessionWebClient);
    get config(): WebApiConfig;
    set config(config: WebApiConfig);
    /**
     * Request more settings. Official client sends this after login
     *
     * @param {any} since Unknown
     */
    requestMoreSettings(since?: number): AsyncCommandResult<MoreSettingsStruct>;
    /**
     * Request simplified settings. Official client sends this after login
     *
     * @param {any} since Unknown
     */
    requestLessSettings(since?: number): AsyncCommandResult<LessSettingsStruct>;
    updateSettings(settings: Partial<unknown>): AsyncCommandResult;
    /**
     * Get one time web login token.
     *
     * Use @method requestSessionURL to get complete url.
     */
    requestWebLoginToken(): AsyncCommandResult<LoginTokenStruct>;
    /**
     * Create session url. Redirect to redirectURL with session info included.
     *
     * @param {string} redirectURL
     */
    requestSessionURL(redirectURL: string): AsyncCommandResult<string>;
    canChangeUUID(uuid: string): AsyncCommandResult<DefaultRes>;
    changeUUID(uuid: string): AsyncCommandResult<DefaultRes>;
    addFriend(id: Long, pa?: string): AsyncCommandResult<FriendReqStruct>;
    addFriendWithPhoneNumber(nickname: string, countryIso: string, countryCode: string, phoneNumber: string): AsyncCommandResult<FriendReqPhoneNumberStruct>;
    removeFriend(id: Long): AsyncCommandResult<FriendReqStruct>;
    removeFriendList(idList: Long[]): AsyncCommandResult;
    hideFriend(id: Long, pa?: string): AsyncCommandResult;
    unhideFriend(id: Long): AsyncCommandResult;
    searchFriends(query: string, pageNum?: number, pageSize?: number): AsyncCommandResult<FriendSearchStruct>;
    findFriendById(id: Long): AsyncCommandResult<FriendFindIdStruct>;
    findFriendByUUID(uuid: string): AsyncCommandResult<FriendFindUUIDStruct>;
    requestFriendList(types?: string[], eventTypes?: string[], token?: Long): AsyncCommandResult<FriendListStruct>;
    setNickname(id: Long, nickname: string): AsyncCommandResult;
    addFavoriteFriends(idList: Long[]): AsyncCommandResult;
    removeFavoriteFriend(id: Long): AsyncCommandResult;
    requestMusicList(id: Long): AsyncCommandResult<DefaultRes>;
    requestMyProfile(): AsyncCommandResult<ProfileReqStruct>;
    requestProfile(id: Long): AsyncCommandResult<ProfileReqStruct>;
    getPreviewURL(url: string): AsyncCommandResult<DefaultRes>;
    private getAccountApiPath;
    private getFriendsApiPath;
    private getProfileApiPath;
    private getProfile3ApiPath;
    private getScrapApiPath;
    /**
     * Create default AccountClient using credential and config.
     *
     * @param {OAuthCredential} credential
     * @param {Partial<WebApiConfig>} config
     */
    static create(credential: OAuthCredential, config?: Partial<WebApiConfig>): Promise<ServiceApiClient>;
    static createSessionURL(token: string, redirectURL: string): string;
}
