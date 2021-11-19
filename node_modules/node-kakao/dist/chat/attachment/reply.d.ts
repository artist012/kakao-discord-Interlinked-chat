import { Long } from 'bson';
import { Attachment } from '.';
import { ChatType } from '../chat-type';
import { MentionStruct } from './mention';
export interface ReplyAttachment extends Attachment {
    attach_only: boolean;
    attach_type: number;
    src_linkId?: Long;
    src_logId: Long;
    src_mentions: MentionStruct[];
    src_message: string;
    src_type: ChatType;
    src_userId: Long;
}
