import { Long } from 'bson';
import { ChatlogStruct } from '../struct';
export interface LinkKickedRes {
    /**
     * Kicked channel id
     */
    c: Long;
    /**
     * Kick feed
     */
    chatLog: ChatlogStruct;
}
