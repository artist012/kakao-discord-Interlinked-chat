export * from './store';
import { ChannelDataStore } from '../../channel/store';
import { Chatlog } from '../../chat';
import { MentionStruct } from '../../chat/attachment';
import { MediaKeyComponent } from '../../media';
import { ChannelUser } from '../../user';
import { TalkChannel } from '../channel';
/**
 * Store Chatlog and provides convenient methods.
 */
export declare class TalkChatData {
    private _chat;
    constructor(_chat: Chatlog);
    /**
     * Chat text. Empty string if value is nullish.
     */
    get text(): string;
    get sendAt(): Date;
    /**
     * Chatlog object
     */
    get chat(): Readonly<Chatlog>;
    /**
     * The chat object's type property has the type value bit masked when the chat is deleted.
     * @return {number} the original chat type
     */
    get originalType(): number;
    /**
     * Get url list in chat. Can be used to generate url preview.
     * It is not for detecting urls.
     */
    get urls(): string[];
    /**
     * Get mention list
     */
    get mentions(): MentionStruct[];
    /**
     * @return {boolean} true if chat has shout option
     */
    get isShout(): boolean;
    /**
     * Get medias on chat.
     */
    get medias(): TalkChatMedia[];
    /**
     * Get channel user info from channel.
     * this is equivalent of calling channel.getUserInfo(data.chat.sender);
     *
     * @template T
     * @template U
     * @param {ChannelDataStore<T, U>} channel
     * @return {U | undefined}
     */
    getSenderInfo<T, U>(channel: ChannelDataStore<T, U>): U | undefined;
    /**
     * Almost same as chat.attachment but supports typing and null safe.
     *
     * @return {Partial<T>} non null attachment object
     */
    attachment<T>(): Partial<T>;
    /**
     * Forward chat to another channel
     *
     * @param {TalkChannel} channel
     */
    forwardTo(channel: TalkChannel): void;
    /**
     * @return {boolean} true when the chat is deleted.
     */
    isDeleted(): boolean;
    /**
     * Check if any users are mentioned.
     *
     * @param {ChannelUser[]} users Users to find
     * @return {boolean} true if anyone is mentioned
     */
    isMentioned(...users: ChannelUser[]): boolean;
}
export interface TalkChatMedia extends MediaKeyComponent {
    /**
     * Media size
     */
    size: number;
    /**
     * Media url
     */
    url: string;
}
