import { UpdatableChatListStore } from '../../chat';
import { EventContext, TypedEmitter } from '../../event';
import { OpenChannel, OpenChannelInfo, OpenChannelSession } from '../../openlink';
import { DefaultRes } from '../../request';
import { ChannelStore, UpdatableChannelDataStore } from '../../channel';
import { OpenChannelEvents, OpenChannelListEvents } from '../event';
import { Managed } from '../managed';
import { ChannelListUpdater } from '../channel/talk-channel-handler';
import { OpenChannelUserInfo } from '../../user';
declare type TalkOpenChannelEvents<T> = OpenChannelEvents<T, OpenChannelUserInfo>;
/**
 * Capture and handle pushes coming to open channel
 */
export declare class TalkOpenChannelHandler<T extends OpenChannel> implements Managed<TalkOpenChannelEvents<T>> {
    private _channel;
    private _session;
    private _emitter;
    private _store;
    private _chatListStore;
    constructor(_channel: T, _session: OpenChannelSession, _emitter: TypedEmitter<TalkOpenChannelEvents<T>>, _store: UpdatableChannelDataStore<OpenChannelInfo, OpenChannelUserInfo>, _chatListStore: UpdatableChatListStore);
    private _callEvent;
    private _hostHandoverHandler;
    private _profileChangedHandler;
    private _msgHiddenHandler;
    private _chatEventHandler;
    private _channelLinkDeletedHandler;
    private _userJoinHandler;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkOpenChannelEvents<T>>): Promise<void>;
}
export declare class TalkOpenChannelListHandler<T extends OpenChannel, U> implements Managed<OpenChannelListEvents<T, U>> {
    private _list;
    private _emitter;
    private _updater;
    constructor(_list: ChannelStore<T>, _emitter: TypedEmitter<OpenChannelListEvents<T, U>>, _updater: ChannelListUpdater<T>);
    private _callEvent;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<OpenChannelListEvents<T, U>>): Promise<void>;
}
export {};
