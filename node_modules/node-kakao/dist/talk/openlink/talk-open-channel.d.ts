import { Long } from 'bson';
import { Channel, ChannelDataStore, ChannelMeta, SetChannelMeta, UpdatableChannelDataStore } from '../../channel';
import { Chat, Chatlog, ChatLogged, ChatLoggedType, ChatType, UpdatableChatListStore } from '../../chat';
import { TalkSession } from '../client';
import { EventContext, TypedEmitter } from '../../event';
import { MediaKeyComponent, MediaMultiPost, MediaPost, MediaUploadForm } from '../../media';
import { OpenChannel, OpenChannelInfo, OpenChannelSession, OpenChannelUserPerm, OpenLink, OpenLinkChannelUserInfo, OpenLinkKickedUserInfo, OpenLinkProfiles } from '../../openlink';
import { AsyncCommandResult, CommandResult, DefaultRes } from '../../request';
import { RelayEventType } from '../../relay';
import { ChannelUser, OpenChannelUserInfo } from '../../user';
import { TalkChannel } from '../channel';
import { OpenChannelEvents } from '../event';
import { Managed } from '../managed';
import { BotMetaContent, ChannelMetaType, GroupMetaContent, LiveTalkCountMetaContent, LiveTalkInfoMetaContent, PrivilegeMetaContent, ProfileMetaContent, TvLiveMetaContent, TvMetaContent } from '../../channel/meta';
import { ChatOnRoomRes } from '../../packet/chat';
import { MediaUploadTemplate } from '../media/upload';
import { FixedReadStream } from '../../stream';
declare type TalkOpenChannelEvents = OpenChannelEvents<TalkOpenChannel, OpenChannelUserInfo>;
export declare class TalkOpenChannel extends TypedEmitter<TalkOpenChannelEvents> implements OpenChannel, ChannelDataStore<OpenChannelInfo, OpenChannelUserInfo>, TalkChannel, OpenChannelSession, Managed<TalkOpenChannelEvents> {
    private _channel;
    private _chatListStore;
    private _channelSession;
    private _openChannelSession;
    private _handler;
    private _openHandler;
    constructor(_channel: Channel, session: TalkSession, store: UpdatableChannelDataStore<OpenChannelInfo, OpenChannelUserInfo>, _chatListStore: UpdatableChatListStore);
    get clientUser(): Readonly<ChannelUser>;
    get channelId(): Long;
    get chatListStore(): UpdatableChatListStore;
    get store(): UpdatableChannelDataStore<OpenChannelInfo, OpenChannelUserInfo>;
    get linkId(): Long;
    get info(): Readonly<OpenChannelInfo>;
    get userCount(): number;
    getName(): string;
    getDisplayName(): string;
    getUserInfo(user: ChannelUser): Readonly<OpenChannelUserInfo> | undefined;
    getAllUserInfo(): IterableIterator<OpenChannelUserInfo>;
    getReadCount(chat: ChatLogged): number;
    getReaders(chat: ChatLogged): Readonly<OpenChannelUserInfo>[];
    sendChat(chat: string | Chat, noSeen?: boolean): AsyncCommandResult<Chatlog>;
    forwardChat(chat: Chat, noSeen?: boolean): AsyncCommandResult<Chatlog>;
    deleteChat(chat: ChatLogged): AsyncCommandResult;
    inviteUsers(): AsyncCommandResult;
    syncChatList(endLogId: Long, startLogId?: Long): AsyncIterableIterator<CommandResult<Chatlog[]>>;
    getChatListFrom(startLogId?: Long): AsyncCommandResult<Chatlog[]>;
    markRead(chat: ChatLogged): AsyncCommandResult;
    setMeta(type: ChannelMetaType, meta: string | ChannelMeta): AsyncCommandResult<SetChannelMeta>;
    setTitleMeta(title: string): AsyncCommandResult<SetChannelMeta>;
    setNoticeMeta(notice: string): AsyncCommandResult<SetChannelMeta>;
    /**
     * Set privileged settings.
     * Need to be owner of the channel to set.
     *
     * @param {PrivilegeMetaContent} content
     * @return {AsyncCommandResult<SetChannelMeta>}
     */
    setPrivilegeMeta(content: PrivilegeMetaContent): AsyncCommandResult<SetChannelMeta>;
    setProfileMeta(content: ProfileMetaContent): AsyncCommandResult<SetChannelMeta>;
    setTvMeta(content: TvMetaContent): AsyncCommandResult<SetChannelMeta>;
    setTvLiveMeta(content: TvLiveMetaContent): AsyncCommandResult<SetChannelMeta>;
    setLiveTalkInfoMeta(content: LiveTalkInfoMetaContent): AsyncCommandResult<SetChannelMeta>;
    setLiveTalkCountMeta(content: LiveTalkCountMetaContent): AsyncCommandResult<SetChannelMeta>;
    setGroupMeta(content: GroupMetaContent): AsyncCommandResult<SetChannelMeta>;
    /**
     * Set bot meta
     *
     * @param {BotMetaContent} content
     * @return {AsyncCommandResult<SetChannelMeta>}
     */
    setBotMeta(content: BotMetaContent): AsyncCommandResult<SetChannelMeta>;
    setPushAlert(flag: boolean): AsyncCommandResult;
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
    downloadMedia(media: MediaKeyComponent, type: ChatType, offset?: number): AsyncCommandResult<FixedReadStream>;
    downloadMediaThumb(media: MediaKeyComponent, type: ChatType, offset?: number): AsyncCommandResult<FixedReadStream>;
    uploadMedia(type: ChatType, form: MediaUploadForm): AsyncCommandResult<MediaPost>;
    uploadMultiMedia(type: ChatType, forms: MediaUploadForm[]): AsyncCommandResult<MediaMultiPost>;
    sendMedia(type: ChatType, template: MediaUploadTemplate): AsyncCommandResult<Chatlog>;
    sendMultiMedia(type: ChatType, templates: MediaUploadTemplate[]): AsyncCommandResult<Chatlog>;
    updateAll(): AsyncCommandResult;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkOpenChannelEvents>): Promise<void>;
}
export {};
