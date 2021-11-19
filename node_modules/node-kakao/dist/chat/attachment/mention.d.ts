import { Long } from 'bson';
/**
 * Raw chat mention typings
 */
export interface MentionStruct {
    /**
     * Index list
     */
    at: number[];
    /**
     * Mention text length, except @ prefix.
     */
    len: number;
    /**
     * Target user id
     */
    user_id: Long | number;
}
