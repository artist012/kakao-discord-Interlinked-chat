import { FeedType, KnownFeedType } from './feed-type';
import { ChannelUser } from '../../user';
import { ChatLogged, TypedChat } from '../chat';
import { KnownChatType } from '../chat-type';
export declare namespace FeedFragment {
    interface Member {
        readonly member: FeedMember;
    }
    interface MemberList {
        readonly members: FeedMember[];
    }
    interface Inviter {
        readonly inviter: FeedMember;
    }
    type Message = ChatLogged;
    interface OpenHandOver {
        readonly prevHost: FeedMember;
        readonly newHost: FeedMember;
    }
}
export interface FeedMember extends ChannelUser {
    nickName: string;
}
export interface ChatFeed<T extends FeedType = FeedType> {
    readonly feedType: T;
    readonly hidden?: boolean;
}
export declare type InviteFeed = ChatFeed<KnownFeedType.INVITE> & FeedFragment.Inviter & FeedFragment.MemberList;
export declare type LeaveFeed = ChatFeed<KnownFeedType.LEAVE> & FeedFragment.Member;
export declare type RichContentFeed = ChatFeed<KnownFeedType.RICH_CONTENT>;
export declare type OpenJoinFeed = ChatFeed<KnownFeedType.OPENLINK_JOIN> & FeedFragment.MemberList;
export declare type OpenLinkDeletedFeed = ChatFeed<KnownFeedType.OPENLINK_DELETE_LINK>;
export declare type OpenRewriteFeed = ChatFeed<KnownFeedType.OPENLINK_REWRITE_FEED> & FeedFragment.Member & FeedFragment.Message;
export declare type OpenKickFeed = ChatFeed<KnownFeedType.OPENLINK_KICKED> & FeedFragment.Member;
export declare type OpenHandOverHostFeed = ChatFeed<KnownFeedType.OPENLINK_HAND_OVER_HOST> & FeedFragment.OpenHandOver;
export declare type OpenManagerGrantFeed = ChatFeed<KnownFeedType.OPEN_MANAGER_GRANT> & FeedFragment.Member;
export declare type OpenManagerRevokeFeed = ChatFeed<KnownFeedType.OPEN_MANAGER_REVOKE> & FeedFragment.Member;
export declare type ChannelDeletedFeed = ChatFeed<KnownFeedType.CHANNEL_DELETED>;
export declare type DeleteAllFeed = ChatFeed<KnownFeedType.DELETE_TO_ALL> & FeedFragment.Message;
export declare type OpenLinkFeeds = OpenJoinFeed | OpenLinkDeletedFeed | OpenRewriteFeed | OpenKickFeed | OpenHandOverHostFeed | OpenManagerGrantFeed | OpenManagerRevokeFeed;
/**
 * Feed is special chat marker
 */
export declare type KnownChatFeeds = InviteFeed | LeaveFeed | RichContentFeed | OpenLinkFeeds | ChannelDeletedFeed | DeleteAllFeed;
export declare type ChatFeeds = KnownChatFeeds | Record<string, unknown> & ChatFeed;
/**
 * Read chat text and deserialize
 *
 * @param {TypedChat<KnownChatType.FEED>} chat
 * @return {ChatFeeds}
 */
export declare function feedFromChat(chat: TypedChat<KnownChatType.FEED>): ChatFeeds;
/**
 * Serialize feed to chat text
 *
 * @param {ChatFeeds} feed
 * @return {string}
 */
export declare function feedToText(feed: ChatFeeds): string;
