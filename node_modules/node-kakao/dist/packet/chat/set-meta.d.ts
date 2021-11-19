import { Long } from 'bson';
import { ChannelMetaStruct } from '../struct';
export interface SetMetaRes {
    /**
     * Channel id
     */
    chatId: Long;
    meta: ChannelMetaStruct;
}
