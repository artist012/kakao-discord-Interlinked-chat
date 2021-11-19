import { Long } from 'bson';
import { ChannelInfo, ChannelMeta, ChannelSession, SetChannelMeta, UpdatableChannelDataStore } from '../../channel';
import { ChannelMetaType } from '../../channel/meta';
import { Chat, Chatlog, ChatLogged, ChatType, UpdatableChatListStore } from '../../chat';
import { MediaKeyComponent, MediaMultiPost, MediaPost, MediaUploadForm } from '../../media';
import { AsyncCommandResult, CommandResult } from '../../request';
import { FixedReadStream } from '../../stream';
import { ChannelUser, ChannelUserInfo } from '../../user';
export declare class TalkChannelDataSession implements ChannelSession {
    private _clientUser;
    private _channelSession;
    private _store;
    private _chatListStore;
    constructor(_clientUser: ChannelUser, _channelSession: ChannelSession, _store: UpdatableChannelDataStore<ChannelInfo, ChannelUserInfo>, _chatListStore: UpdatableChatListStore);
    get clientUser(): Readonly<ChannelUser>;
    get store(): UpdatableChannelDataStore<ChannelInfo, ChannelUserInfo>;
    sendChat(chat: string | Chat, noSeen?: boolean): AsyncCommandResult<Chatlog>;
    forwardChat(chat: Chat, noSeen?: boolean): AsyncCommandResult<Chatlog>;
    deleteChat(chat: ChatLogged): AsyncCommandResult;
    markRead(chat: ChatLogged): AsyncCommandResult;
    setMeta(type: ChannelMetaType, meta: ChannelMeta | string): AsyncCommandResult<SetChannelMeta>;
    setPushAlert(flag: boolean): AsyncCommandResult;
    syncChatList(endLogId: Long, startLogId?: Long): AsyncIterableIterator<CommandResult<Chatlog[]>>;
    getChatListFrom(startLogId?: Long): AsyncCommandResult<Chatlog[]>;
    downloadMedia(media: MediaKeyComponent, type: ChatType, offset?: number): AsyncCommandResult<FixedReadStream>;
    downloadMediaThumb(media: MediaKeyComponent, type: ChatType, offset?: number): AsyncCommandResult<FixedReadStream>;
    uploadMedia(type: ChatType, form: MediaUploadForm): AsyncCommandResult<MediaPost>;
    uploadMultiMedia(type: ChatType, forms: MediaUploadForm[]): AsyncCommandResult<MediaMultiPost>;
}
