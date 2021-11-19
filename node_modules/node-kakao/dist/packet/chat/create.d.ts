import { Long } from 'bson';
import { ChannelInfoStruct } from '../struct';
export interface CreateRes {
    chatId: Long;
    chatRoom?: ChannelInfoStruct;
}
