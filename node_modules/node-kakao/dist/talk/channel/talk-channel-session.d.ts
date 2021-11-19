import { Long } from 'bson';
import { Channel, ChannelMeta, ChannelSession, ChannelTemplate, NormalChannelManageSession, SetChannelMeta } from '../../channel';
import { Chat, Chatlog, ChatLogged, ChatType } from '../../chat';
import { TalkSession } from '../client';
import { AsyncCommandResult, CommandResult } from '../../request';
import { MShipRes, ShipRes } from '../../packet/chat';
import { ChannelUser } from '../../user';
import { ChannelMetaType } from '../../channel/meta';
import { MediaKeyComponent, MediaMultiPost, MediaPost, MediaUploadForm } from '../../media';
import { ConnectionSession } from '../../network';
import { FixedReadStream } from '../../stream';
/**
 * Default ChannelSession implementation
 */
export declare class TalkChannelSession implements ChannelSession {
    private _channel;
    private _session;
    currentMsgId: number;
    constructor(channel: Channel, session: TalkSession);
    get session(): TalkSession;
    sendChat(chat: Chat | string, noSeen?: boolean): AsyncCommandResult<Chatlog>;
    forwardChat(chat: Chat, noSeen?: boolean): AsyncCommandResult<Chatlog>;
    deleteChat(chat: ChatLogged): Promise<{
        success: boolean;
        status: number;
    }>;
    markRead(chat: ChatLogged): Promise<{
        success: boolean;
        status: number;
    }>;
    setMeta(type: ChannelMetaType, meta: ChannelMeta | string): AsyncCommandResult<SetChannelMeta>;
    setPushAlert(flag: boolean): AsyncCommandResult;
    inviteUsers(users: ChannelUser[]): AsyncCommandResult;
    syncChatList(endLogId: Long, startLogId?: Long): AsyncIterableIterator<CommandResult<Chatlog[]>>;
    getChatListFrom(startLogId?: Long): AsyncCommandResult<Chatlog[]>;
    createTrailerSession(media: MediaKeyComponent, type: ChatType): AsyncCommandResult<ConnectionSession>;
    downloadMedia(media: MediaKeyComponent, type: ChatType, offset?: number): AsyncCommandResult<FixedReadStream>;
    downloadMediaThumb(media: MediaKeyComponent, type: ChatType, offset?: number): AsyncCommandResult<FixedReadStream>;
    shipMedia(type: ChatType, form: MediaUploadForm): AsyncCommandResult<ShipRes>;
    shipMultiMedia(type: ChatType, forms: MediaUploadForm[]): AsyncCommandResult<MShipRes>;
    uploadMedia(type: ChatType, form: MediaUploadForm): AsyncCommandResult<MediaPost>;
    uploadMultiMedia(type: ChatType, forms: MediaUploadForm[]): AsyncCommandResult<MediaMultiPost>;
}
/**
 * Default ChannelManageSession implementation.
 */
export declare class TalkChannelManageSession implements NormalChannelManageSession {
    private _session;
    constructor(session: TalkSession);
    createChannel(template: ChannelTemplate): AsyncCommandResult<Channel>;
    createMemoChannel(): AsyncCommandResult<Channel>;
    leaveChannel(channel: Channel, block?: boolean): AsyncCommandResult<Long>;
}
