import { Channel, ChannelInfo, ChannelStore, UpdatableChannelDataStore } from '../../channel';
import { UpdatableChatListStore } from '../../chat';
import { EventContext, TypedEmitter } from '../../event';
import { ChannelEvents, ChannelListEvent } from '../event';
import { AsyncCommandResult, DefaultRes } from '../../request';
import { ChannelUserInfo } from '../../user';
import { Managed } from '../managed';
declare type TalkChannelHandlerEvents<T extends Channel> = ChannelEvents<T, ChannelUserInfo>;
/**
 * Capture and handle pushes coming to channel
 */
export declare class TalkChannelHandler<T extends Channel> implements Managed<TalkChannelHandlerEvents<T>> {
    private _channel;
    private _emitter;
    private _store;
    private _chatListStore;
    constructor(_channel: T, _emitter: TypedEmitter<ChannelEvents<T, ChannelUserInfo>>, _store: UpdatableChannelDataStore<ChannelInfo, ChannelUserInfo>, _chatListStore: UpdatableChatListStore);
    private get info();
    private _callEvent;
    private _msgHandler;
    private _feedHandler;
    private _chatReadHandler;
    private _metaChangeHandler;
    private _userLeftHandler;
    private _msgDeleteHandler;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkChannelHandlerEvents<T>>): Promise<void>;
}
/**
 * Update channel list
 */
export interface ChannelListUpdater<T> {
    /**
     * Add channel
     *
     * @param channel
     */
    addChannel(channel: Channel): AsyncCommandResult<T>;
    /**
     * Remove channel from managing
     *
     * @param channel
     */
    removeChannel(channel: Channel): boolean;
}
export declare class TalkChannelListHandler<T extends Channel> implements Managed<ChannelListEvent<T>> {
    private _list;
    private _emitter;
    private _updater;
    constructor(_list: ChannelStore<T>, _emitter: TypedEmitter<ChannelListEvent<T>>, _updater: ChannelListUpdater<T>);
    private _callEvent;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<ChannelListEvent<T>>): Promise<void>;
}
export {};
