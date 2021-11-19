import { Long } from 'bson';
import { TalkChannel } from '.';
import { ChannelDataUpdater, ChannelSession, NormalChannelSession, UpdatableChannelDataStore } from '../../channel';
import { Chatlog, ChatLogged, ChatType } from '../../chat';
import { MediaUploadForm } from '../../media';
import { OpenChannelSession } from '../../openlink';
import { AsyncCommandResult } from '../../request';
import { ChannelUser, NormalChannelUserInfo, OpenChannelUserInfo } from '../../user';
import { MediaUploadTemplate } from '../media/upload';
export declare function mediaTemplateToForm(template: MediaUploadTemplate): Promise<MediaUploadForm>;
export declare function sendMultiMedia(channelSession: ChannelSession, type: ChatType, templates: MediaUploadTemplate[]): AsyncCommandResult<Chatlog>;
export declare function sendMedia(channelSession: ChannelSession, type: ChatType, template: MediaUploadTemplate): AsyncCommandResult<Chatlog>;
export declare function initWatermark(updater: ChannelDataUpdater<unknown, unknown>, idList: Long[], watermarkList: Long[]): void;
export declare function initNormalUserList(session: NormalChannelSession, userIdList: Long[]): AsyncCommandResult<NormalChannelUserInfo[]>;
export declare function initOpenUserList(session: OpenChannelSession, userIdList: Long[]): AsyncCommandResult<OpenChannelUserInfo[]>;
export declare function updateChatList(channel: TalkChannel): Promise<void>;
/**
 * Store channel data in memory
 */
export declare class TalkMemoryChannelDataStore<T, U> implements UpdatableChannelDataStore<T, U> {
    private _info;
    private _userInfoMap;
    private _watermarkMap;
    constructor(_info: T, _userInfoMap?: Map<string, U>, _watermarkMap?: Map<string, Long>);
    get info(): Readonly<T>;
    get userCount(): number;
    getUserInfo(user: ChannelUser): Readonly<U> | undefined;
    getAllUserInfo(): IterableIterator<U>;
    clearUserList(): void;
    getReadCount(chat: ChatLogged): number;
    getReaders(chat: ChatLogged): Readonly<U>[];
    updateInfo(info: Partial<T>): void;
    setInfo(info: T): void;
    updateUserInfo(user: ChannelUser, info: Partial<U>): void;
    removeUser(user: ChannelUser): boolean;
    updateWatermark(readerId: Long, watermark: Long): void;
    clearWatermark(): void;
}
