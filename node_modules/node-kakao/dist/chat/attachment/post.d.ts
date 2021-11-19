import { Long } from 'bson';
import { Attachment } from '.';
import { EmoticonAttachment } from './emoticon';
export declare enum KnownPostItemType {
    TEXT = 1,
    FOOTER = 2,
    HEADER = 3,
    EMOTICON = 4,
    IMAGE = 5,
    VIDEO = 6,
    FILE = 7,
    SCHEDULE = 8,
    VOTE = 9,
    SCRAP = 10
}
export declare type PostItemType = KnownPostItemType | number;
export declare enum KnownPostSubItemType {
}
export declare type PostSubItemType = KnownPostSubItemType | number;
export declare enum KnownPostFooterStyle {
    ARTICLE = 1,
    SCHEDULE = 2,
    SCHEDULE_ANSWER = 3,
    VOTE = 4,
    VOTE_RESULT = 5
}
export declare type PostFooterStyle = KnownPostFooterStyle | number;
export declare namespace PostItem {
    interface Unknown extends Record<string, unknown> {
        /**
         * Item type
         */
        t: PostItemType;
    }
    interface Text extends Unknown {
        t: KnownPostItemType.TEXT;
        /**
         * Content text
         */
        ct: string;
        /**
         * JSON content text
         */
        jct: string;
    }
    interface Header extends Unknown {
        t: KnownPostItemType.HEADER;
        /**
         * Item style (unknown)
         */
        st: number;
        /**
         * User
         */
        u?: {
            /**
             * User id
             */
            id: number | Long;
        };
    }
    interface Image extends Unknown {
        t: KnownPostItemType.IMAGE;
        /**
         * Title
         */
        tt?: string;
        /**
         * Thumbnail url list
         */
        th: string[];
        /**
         * true if images are gif
         */
        g?: boolean;
    }
    interface Emoticon extends Unknown {
        t: KnownPostItemType.EMOTICON;
        /**
         * Emoticon attachment
         */
        ct: EmoticonAttachment;
    }
    interface Vote extends Unknown {
        t: KnownPostItemType.VOTE;
        /**
         * Item style (unknown)
         */
        st: number;
        /**
         * Title
         */
        tt: string;
        /**
         * Sub type(?)
         */
        ittpe?: string;
        /**
         * Sub item list
         */
        its: Record<string, unknown>[];
    }
    interface Video extends Unknown {
        t: KnownPostItemType.VIDEO;
        /**
         * Thumbnail url
         */
        th: string;
    }
    interface File extends Unknown {
        t: KnownPostItemType.FILE;
        /**
         * First file name
         */
        tt: string;
        /**
         * File count
         */
        c: number;
    }
    interface Footer extends Unknown {
        t: KnownPostItemType.FOOTER;
        /**
         * Item style
         */
        st: PostFooterStyle;
        /**
         * URL
         */
        url: string;
    }
}
export interface PostAttachment extends Attachment {
    /**
     * Sub PostItem type(?)
     */
    subtype?: PostSubItemType;
    /**
     * Post item object list
     */
    os: PostItem.Unknown[];
}
export interface VoteAttachment extends PostAttachment {
    /**
     * Vote id
     */
    voteId: number;
    /**
     * Vote title
     */
    title: string;
}
