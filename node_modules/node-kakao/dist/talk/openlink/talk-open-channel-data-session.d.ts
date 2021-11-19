import { UpdatableChannelDataStore } from '../../channel';
import { ChatLogged, ChatLoggedType } from '../../chat';
import { OpenChannelInfo, OpenChannelSession, OpenChannelUserPerm, OpenLink, OpenLinkChannelUserInfo, OpenLinkKickedUserInfo, OpenLinkProfiles } from '../../openlink';
import { ChatOnRoomRes } from '../../packet/chat';
import { RelayEventType } from '../../relay';
import { AsyncCommandResult } from '../../request';
import { ChannelUser, OpenChannelUserInfo } from '../../user';
/**
 * Do open channel session operations and updates store.
 */
export declare class TalkOpenChannelDataSession implements OpenChannelSession {
    private _clientUser;
    private _channelSession;
    private _store;
    constructor(_clientUser: ChannelUser, _channelSession: OpenChannelSession, _store: UpdatableChannelDataStore<OpenChannelInfo, OpenChannelUserInfo>);
    get clientUser(): Readonly<ChannelUser>;
    get store(): UpdatableChannelDataStore<OpenChannelInfo, OpenChannelUserInfo>;
    markRead(chat: ChatLogged): AsyncCommandResult;
    chatON(): AsyncCommandResult<ChatOnRoomRes>;
    getLatestChannelInfo(): AsyncCommandResult<OpenChannelInfo>;
    getLatestUserInfo(...users: ChannelUser[]): AsyncCommandResult<OpenChannelUserInfo[]>;
    getAllLatestUserInfo(): AsyncCommandResult<OpenChannelUserInfo[]>;
    getLatestOpenLink(): AsyncCommandResult<OpenLink>;
    createEvent(chat: ChatLoggedType, type: RelayEventType, count: number): AsyncCommandResult;
    getKickList(): AsyncCommandResult<OpenLinkKickedUserInfo[]>;
    removeKicked(user: ChannelUser): AsyncCommandResult;
    setUserPerm(user: ChannelUser, perm: OpenChannelUserPerm): AsyncCommandResult;
    handoverHost(user: ChannelUser): AsyncCommandResult;
    kickUser(user: ChannelUser): AsyncCommandResult;
    blockUser(user: ChannelUser): AsyncCommandResult;
    react(flag: boolean): AsyncCommandResult;
    getReaction(): AsyncCommandResult<[number, boolean]>;
    changeProfile(profile: OpenLinkProfiles): AsyncCommandResult<Readonly<OpenLinkChannelUserInfo> | null>;
    hideChat(chat: ChatLoggedType): AsyncCommandResult;
}
