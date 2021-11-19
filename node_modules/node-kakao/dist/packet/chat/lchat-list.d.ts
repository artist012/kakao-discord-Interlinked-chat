import { Long } from 'bson';
import { ChannelDataStruct } from '../struct';
export interface LChatListRes {
    chatDatas: ChannelDataStruct[];
    lastChatId: Long;
    lastTokenId: Long;
    mcmRevision: number;
    delChatIds: Long[];
    kc: unknown[];
    ltk: Long;
    lbk: number;
    eof: boolean;
}
