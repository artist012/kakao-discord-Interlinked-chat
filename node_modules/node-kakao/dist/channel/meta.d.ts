import { Long } from 'bson';
export declare enum KnownChannelMetaType {
    UNDEFINED = 0,
    NOTICE = 1,
    GROUP = 2,
    TITLE = 3,
    PROFILE = 4,
    TV = 5,
    PRIVILEGE = 6,
    TV_LIVE = 7,
    PLUS_BACKGROUND = 8,
    LIVE_TALK_INFO = 11,
    LIVE_TALK_COUNT = 12,
    OPEN_CHANNEL_CHAT = 13,
    BOT = 14
}
export declare type ChannelMetaType = KnownChannelMetaType | number;
export declare enum ChannelClientMetaType {
    UNDEFINED = "undefined",
    NAME = "name",
    IMAGE_PATH = "image_path",
    FAVORITE = "favorite",
    PUSH_SOUND = "push_sound",
    CHAT_HIDE = "chat_hide",
    FULL_IMAGE_URL = "full_image_url",
    IMAGE_URL = "imageUrl"
}
export interface ChannelMetaStruct {
    type: ChannelMetaType;
    revision: Long;
    authorId?: Long;
    content: string;
    updatedAt: number;
}
export interface ChannelClientMetaStruct {
    name?: string;
    image_path?: string;
    favorite?: boolean;
    push_sound?: boolean;
    chat_hide?: boolean;
    fullImageUrl?: string;
    imageUrl?: string;
}
export interface PrivilegeMetaContent {
    pin_notice: boolean;
}
export interface ProfileMetaContent {
    imageUrl: string;
    fullImageUrl: string;
}
export interface TvMetaContent {
    url: string;
}
export interface TvLiveMetaContent {
    url: string;
    live?: 'on';
}
export interface LiveTalkInfoOnMetaContent {
    liveon: boolean;
    title: string;
    startTime: number;
    userId: number | Long;
    csIP: string;
    csIP6: string;
    csPort: number;
    callId: string;
}
export interface LiveTalkInfoOffMetaContent extends Partial<LiveTalkInfoOnMetaContent> {
    liveon: false;
}
export declare type LiveTalkInfoMetaContent = LiveTalkInfoOnMetaContent | LiveTalkInfoOffMetaContent;
export interface LiveTalkCountMetaContent {
    count: number;
}
export interface GroupMetaContent {
    group_id: number;
    group_name: string;
    group_profile_thumbnail_url: string;
    group_profile_url: string;
}
export interface BotCommandStruct {
    id: string;
}
export interface BotAddCommandStruct extends BotCommandStruct {
    name: string;
    updatedAt: number;
    botId: Long;
}
export declare type BotDelCommandStruct = BotCommandStruct;
export interface BotMetaContent {
    add?: BotAddCommandStruct[];
    update?: BotAddCommandStruct[];
    full?: BotAddCommandStruct[];
    del?: BotDelCommandStruct[];
}
