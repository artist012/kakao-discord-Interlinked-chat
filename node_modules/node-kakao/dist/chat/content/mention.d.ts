import { ChatContent } from '.';
import { DisplayUserInfo } from '../../user';
import { Chat } from '../chat';
/**
 * Mentions user
 */
export declare class MentionContent implements ChatContent {
    user: DisplayUserInfo;
    constructor(user: DisplayUserInfo);
    append(chat: Chat): void;
}
