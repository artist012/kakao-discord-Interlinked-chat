import { Long } from 'bson';
import { LChatListRes } from './lchat-list';
export interface LoginListRes extends LChatListRes {
    userId: Long;
    revision: number;
    revisionInfo: string;
    minLogId: Long;
    sb: number;
}
