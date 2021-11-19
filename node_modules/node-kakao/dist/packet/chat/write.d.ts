import { Long } from 'bson';
import { ChatlogStruct } from '../struct';
export interface WriteRes {
    msgId: number;
    chatId: Long;
    logId: Long;
    prevId: Long;
    sendAt: number;
    chatLog?: ChatlogStruct;
}
