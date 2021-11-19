import { Long } from 'bson';
import { ChatlogStruct } from '../struct';
export interface SyncMsgRes {
    /**
     * false if there are more chats.
     */
    isOK: boolean;
    chatLogs?: ChatlogStruct[];
    /**
     * Minimum logId can request
     */
    minLogId?: Long;
    /**
     * Unknown same as minLogId
     */
    jsi?: Long;
    /**
     * link id
     */
    li?: Long;
    lastTokenId: Long;
}
