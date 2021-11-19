import { Long } from 'bson';
import { ChannelMetaStruct } from '../struct';
export interface ChgMetaRes {
    chatId: Long;
    meta: ChannelMetaStruct;
}
