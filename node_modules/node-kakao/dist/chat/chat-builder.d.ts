import { Chat } from './chat';
import { ChatType } from './chat-type';
import { ChatContent } from './content';
/**
 * Build Chat object from existing chat or create new.
 */
export declare class ChatBuilder {
    private _contents;
    constructor();
    /**
     * Append text.
     * this is equivalent of calling builder.append(new TextContent(text));
     *
     * @param {string} text
     * @return {this}
     */
    text(text: string): this;
    /**
     * Append attachment.
     * this is equivalent of calling builder.append(new AttachmentContent(attachment));
     *
     * @param {Record<string, unknown>} attachment
     * @return {this}
     */
    attachment(attachment: Record<string, unknown>): this;
    /**
     * Append chat content.
     *
     * @param {ChatContent} content
     * @return {this}
     */
    append(content: ChatContent): this;
    /**
     * Set shout option.
     * Only have visual effect on open channel.
     *
     * @param {boolean} flag
     * @return {this}
     */
    shout(flag: boolean): this;
    /**
     * Build into chat object from existing chat or with type.
     *
     * @param {Chat | ChatType} data
     * @return {Chat}
     */
    build(data: Chat | ChatType): Chat;
}
