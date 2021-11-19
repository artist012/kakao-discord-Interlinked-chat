import { Channel, NormalChannelInfo, NormalChannelSession, UpdatableChannelDataStore } from '../../channel';
import { UpdatableChatListStore } from '../../chat';
import { EventContext, TypedEmitter } from '../../event';
import { ChannelEvents } from '../event';
import { DefaultRes } from '../../request';
import { NormalChannelUserInfo } from '../../user';
import { Managed } from '../managed';
declare type TalkNormalChannelEvents<T extends Channel> = ChannelEvents<T, NormalChannelUserInfo>;
/**
 * Capture and handle pushes coming to channel
 */
export declare class TalkNormalChannelHandler<T extends Channel> implements Managed<TalkNormalChannelEvents<T>> {
    private _channel;
    private _session;
    private _emitter;
    private _store;
    private _chatListStore;
    constructor(_channel: T, _session: NormalChannelSession, _emitter: TypedEmitter<TalkNormalChannelEvents<T>>, _store: UpdatableChannelDataStore<NormalChannelInfo, NormalChannelUserInfo>, _chatListStore: UpdatableChatListStore);
    private _callEvent;
    private _userJoinHandler;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkNormalChannelEvents<T>>): Promise<void>;
}
export {};
