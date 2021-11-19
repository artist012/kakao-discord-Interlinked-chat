import { ChatLogged, ChatLoggedType } from '../../chat';
import { TalkSession } from '../client';
import { OpenChannel, OpenChannelInfo, OpenChannelManageSession, OpenChannelSession, OpenChannelUserPerm, OpenLink, OpenLinkChannelUserInfo, OpenLinkComponent, OpenLinkKickedUserInfo, OpenLinkProfiles } from '../../openlink';
import { ChatOnRoomRes } from '../../packet/chat';
import { AsyncCommandResult } from '../../request';
import { ChannelUser, OpenChannelUserInfo } from '../../user';
import { RelayEventType } from '../../relay';
import { Channel } from '../../channel';
import { Long } from 'bson';
/**
 * Default OpenChannelSession implementation.
 */
export declare class TalkOpenChannelSession implements OpenChannelSession {
    private _channel;
    private _session;
    private _normalSession;
    private _linkSession;
    constructor(channel: OpenChannel, session: TalkSession);
    get session(): TalkSession;
    chatON(): AsyncCommandResult<Readonly<ChatOnRoomRes>>;
    markRead(chat: ChatLogged): Promise<{
        success: boolean;
        status: number;
    }>;
    getLatestChannelInfo(): AsyncCommandResult<OpenChannelInfo>;
    getLatestUserInfo(...channelUsers: ChannelUser[]): AsyncCommandResult<OpenChannelUserInfo[]>;
    getAllLatestUserInfo(): AsyncCommandResult<OpenChannelUserInfo[]>;
    getKickList(): AsyncCommandResult<OpenLinkKickedUserInfo[]>;
    removeKicked(user: ChannelUser): AsyncCommandResult;
    react(flag: boolean): AsyncCommandResult;
    getReaction(): AsyncCommandResult<[number, boolean]>;
    getLatestOpenLink(): AsyncCommandResult<OpenLink>;
    setUserPerm(user: ChannelUser, perm: OpenChannelUserPerm): AsyncCommandResult;
    createEvent(chat: ChatLoggedType, type: RelayEventType, count: number): AsyncCommandResult;
    handoverHost(user: ChannelUser): AsyncCommandResult;
    kickUser(user: ChannelUser): AsyncCommandResult;
    blockUser(user: ChannelUser): AsyncCommandResult;
    changeProfile(profile: OpenLinkProfiles): AsyncCommandResult<Readonly<OpenLinkChannelUserInfo> | null>;
    hideChat(chat: ChatLoggedType): AsyncCommandResult;
}
export declare class TalkOpenChannelManageSession implements OpenChannelManageSession {
    private _session;
    private _normalSession;
    constructor(_session: TalkSession);
    leaveChannel(channel: Channel): AsyncCommandResult<Long>;
    leaveKicked(channel: OpenChannel): AsyncCommandResult;
    joinChannel(link: OpenLinkComponent, profile: OpenLinkProfiles, passcode?: string): AsyncCommandResult<OpenChannel>;
}
