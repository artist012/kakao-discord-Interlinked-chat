import { SetChannelMeta } from '../../channel';
import { ChannelMetaType } from '../../channel/meta';
import { ChatFeeds, ChatLogged, ChatLoggedType, DeleteAllFeed, KnownChatType, OpenKickFeed, OpenLinkDeletedFeed, OpenRewriteFeed, TypedChatlog } from '../../chat';
import { InformedOpenLink, OpenLink, OpenLinkChannelUserInfo } from '../../openlink';
import { KickoutType } from '../../packet/chat';
import { RelayEventType } from '../../relay';
import { DefaultRes } from '../../request';
import { TalkChatData } from '../chat';
export interface ChatEvent<T, U> {
    'chat': (data: TalkChatData, channel: T) => void;
    'chat_read': (chat: Readonly<ChatLogged>, channel: T, reader?: U) => void;
    'chat_deleted': (feedChatlog: Readonly<TypedChatlog<KnownChatType.FEED>>, channel: T, feed: DeleteAllFeed) => void;
}
export interface ChannelEvent<T, U> {
    'meta_change': (channel: T, type: ChannelMetaType, newMeta: SetChannelMeta) => void;
    'user_join': (feedChatlog: Readonly<TypedChatlog<KnownChatType.FEED>>, channel: T, user: U, feed: ChatFeeds) => void;
    'user_left': (feedChatlog: Readonly<TypedChatlog<KnownChatType.FEED>>, channel: T, user: U, feed: ChatFeeds) => void;
}
export interface ChannelListEvent<T> {
    'channel_join': (channel: T) => void;
    'channel_left': (channel: T) => void;
}
export interface RootChannelListEvent<T> {
    'channel_added': (channel: T) => void;
}
export interface OpenChannelEvent<T, U> {
    'profile_changed': (channel: T, lastInfo: U, user: OpenLinkChannelUserInfo) => void;
    'perm_changed': (channel: T, lastInfo: U, user: U) => void;
    'host_handover': (channel: T, lastLink: OpenLink, link: OpenLink) => void;
    'channel_link_deleted': (feedChatlog: Readonly<TypedChatlog<KnownChatType.FEED>>, channel: T, feed: OpenLinkDeletedFeed) => void;
    'message_hidden': (feedChatlog: Readonly<TypedChatlog<KnownChatType.FEED>>, channel: T, feed: OpenRewriteFeed) => void;
    'chat_event': (channel: T, author: U, type: RelayEventType, count: number, chat: ChatLoggedType) => void;
}
export interface OpenChannelListEvent<T> {
    'channel_kicked': (feedChatlog: Readonly<TypedChatlog<KnownChatType.FEED>>, channel: T, feed: OpenKickFeed) => void;
}
export interface OpenLinkEvent {
    'link_created': (link: InformedOpenLink) => void;
    'link_deleted': (link: InformedOpenLink) => void;
}
export interface ClientEvent {
    'switch_server': () => void;
    'disconnected': (reason: KickoutType) => void;
    'push_packet': (method: string, data: DefaultRes) => void;
    'error': (error: unknown) => void;
}
export declare type ClientEvents<T, U> = ClientEvent & ChannelListEvents<T, U>;
export declare type ChannelListEvents<T, U> = OpenChannelListEvents<T, U> & NormalChannelListEvents<T, U> & RootChannelListEvent<T>;
export declare type NormalChannelListEvents<T, U> = ChannelListEvent<T> & ChannelEvents<T, U>;
export declare type OpenChannelListEvents<T, U> = OpenLinkListEvents & ChannelListEvent<T> & OpenChannelEvents<T, U> & OpenChannelListEvent<T>;
export declare type OpenLinkListEvents = OpenLinkEvent;
export declare type ChannelEvents<T, U> = ChannelEvent<T, U> & ChatEvent<T, U>;
export declare type OpenChannelEvents<T, U> = ChannelEvents<T, U> & OpenChannelEvent<T, U>;
