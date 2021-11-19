import { Chat } from '../chat';
import { ChatContent } from '.';
/**
 * Append text
 */
export declare class TextContent implements ChatContent {
    text: string;
    constructor(text: string);
    append(chat: Chat): void;
}
/**
 * Append attachment
 */
export declare class AttachmentContent implements ChatContent {
    attachment: Record<string, unknown>;
    constructor(attachment: Record<string, unknown>);
    append(chat: Chat): void;
}
