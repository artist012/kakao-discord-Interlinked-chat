import { Long } from 'bson';
import { ChatlogStruct } from '../struct';
export interface SyncJoinRes {
    /**
     * Channel id
     */
    c: Long;
    /**
     * Join chat (feed)
     */
    chatLog: ChatlogStruct;
}
