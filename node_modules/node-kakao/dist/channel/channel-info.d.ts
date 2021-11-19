import { Long } from 'bson';
import { Chatlog } from '../chat';
import { DisplayUserInfo } from '../user';
import { Channel } from './channel';
import { ChannelType } from './channel-type';
import { ChannelMetaType } from './meta';
export interface ChannelMeta {
    content: string;
}
export interface SetChannelMeta extends ChannelMeta {
    revision: number;
    authorId: Long;
    updatedAt: number;
}
export declare type ChannelMetaMap = Record<ChannelMetaType, SetChannelMeta>;
/**
 * Common channel info
 */
export interface ChannelInfo extends Channel {
    /**
     * Channel type
     */
    type: ChannelType;
    /**
     * Active user count
     */
    activeUserCount: number;
    /**
     * Unread chat count
     */
    newChatCount: number;
    /**
     * true if new chat count is invalid
     */
    newChatCountInvalid: boolean;
    /**
     * Last chat log id
     */
    lastChatLogId: Long;
    /**
     * Last seen chat log id
     */
    lastSeenLogId: Long;
    /**
     * Last chatlog
     */
    lastChatLog?: Chatlog;
    metaMap: ChannelMetaMap;
    displayUserList: DisplayUserInfo[];
    /**
     * Push alert settings
     */
    pushAlert: boolean;
}
export declare namespace ChannelInfo {
    function createPartial(info: Partial<ChannelInfo>): ChannelInfo;
}
/**
 * Normal channel info
 */
export interface NormalChannelInfo extends ChannelInfo {
    /**
     * Channel join time (js Date timestamp)
     */
    joinTime: number;
}
export declare namespace NormalChannelInfo {
    function createPartial(info: Partial<NormalChannelInfo>): NormalChannelInfo;
}
/**
 * Channel with info data
 */
export interface ChannelData<T> {
    /**
     * Channel info snapshot.
     */
    readonly info: Readonly<T>;
}
/**
 * Channel data on login
 */
export interface LoginData<T> {
    /**
     * Info update time
     */
    lastUpdate: number;
    channel: T;
}
export interface NormalChannelData extends Channel, ChannelData<NormalChannelInfo> {
}
