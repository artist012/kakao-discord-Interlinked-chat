import { ChatContent } from '.';
import { Chat, Chatlog } from '../chat';
/**
 * Set reply chat
 */
export declare class ReplyContent implements ChatContent {
    /**
     * Target chat
     */
    chat: Chatlog;
    /**
     * If true only target chat will be visible.
     * Used for emoticon reply.
     */
    attachOnly: boolean;
    /**
     * Chat to attach to reply.
     * Text field will be not get attached.
     * Using emoticon is supported.
     */
    attach?: Chat;
    constructor(chat: Chatlog, attachOnly?: boolean, attach?: Chat);
    append(chat: Chat): void;
}
