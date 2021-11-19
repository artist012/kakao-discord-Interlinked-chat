import { Long } from 'bson';
export interface DecunreadRes {
    chatId: Long;
    userId: Long;
    watermark: Long;
}
