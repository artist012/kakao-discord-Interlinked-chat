/**
 * Known feed types
 */
export declare enum KnownFeedType {
    LOCAL_LEAVE = -1,
    INVITE = 1,
    LEAVE = 2,
    SECRET_LEAVE = 3,
    OPENLINK_JOIN = 4,
    OPENLINK_DELETE_LINK = 5,
    OPENLINK_KICKED = 6,
    CHANNEL_KICKED = 7,
    CHANNEL_DELETED = 8,
    RICH_CONTENT = 10,
    OPEN_MANAGER_GRANT = 11,
    OPEN_MANAGER_REVOKE = 12,
    OPENLINK_REWRITE_FEED = 13,
    DELETE_TO_ALL = 14,
    OPENLINK_HAND_OVER_HOST = 15,
    TEAM_CHANNEL_EVENT = 18
}
export declare type FeedType = KnownFeedType | number;
