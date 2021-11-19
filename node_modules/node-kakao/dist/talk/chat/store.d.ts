import { Long } from 'bson';
import { Chatlog, UpdatableChatListStore } from '../../chat';
export declare const EmptyChatListStore: UpdatableChatListStore;
/**
 * Inmemory chat list with count limit
 */
export declare class TalkMemoryChatListStore implements UpdatableChatListStore {
    limit: number;
    private _chatList;
    constructor(limit: number, _chatList?: Chatlog[]);
    private findIndex;
    private makeIterator;
    get(logId: Long): Promise<Chatlog | undefined>;
    last(): Promise<Chatlog | undefined>;
    before(logId: Long, maxCount?: number): AsyncIterableIterator<Chatlog>;
    since(time: number): AsyncIterableIterator<Chatlog>;
    all(): AsyncIterableIterator<Chatlog>;
    addChat(...chat: Chatlog[]): Promise<void>;
    updateChat(logId: Long, chat: Partial<Chatlog>): Promise<void>;
    removeChat(logId: Long): Promise<boolean>;
}
