import { Long } from 'bson';
import { ChatType } from '../../chat';
import { RelayEventType } from '../../relay';
export interface SyncEventRes {
    /**
     * Link id
     */
    li: Long;
    /**
     * Channel id
     */
    c: Long;
    /**
     * Author userId
     */
    authorId: Long;
    /**
     * Event type
     */
    et: RelayEventType;
    /**
     * Event count (ex: shout heart count)
     */
    ec: number;
    /**
     * Target chat logId
     */
    logId: Long;
    /**
     * Target chat type
     */
    t: ChatType;
}
