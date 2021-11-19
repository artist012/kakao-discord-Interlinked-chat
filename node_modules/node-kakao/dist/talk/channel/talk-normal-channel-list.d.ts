import { Long } from 'bson';
import { Channel, ChannelStore, ChannelTemplate, LoginData, NormalChannelData, NormalChannelManageSession } from '../../channel';
import { TalkSession } from '../client';
import { EventContext, TypedEmitter } from '../../event';
import { AsyncCommandResult, DefaultRes } from '../../request';
import { NormalChannelListEvents } from '../event';
import { Managed } from '../managed';
import { TalkNormalChannel } from './talk-normal-channel';
import { ChannelListUpdater } from './talk-channel-handler';
import { NormalChannelUserInfo } from '../../user';
import { ClientDataLoader } from '../../loader';
export declare type TalkNormalChannelListEvents = NormalChannelListEvents<TalkNormalChannel, NormalChannelUserInfo>;
/**
 * Manage session channels
 */
export declare class TalkNormalChannelList extends TypedEmitter<TalkNormalChannelListEvents> implements ChannelStore<TalkNormalChannel>, NormalChannelManageSession, Managed<TalkNormalChannelListEvents>, ChannelListUpdater<TalkNormalChannel> {
    private _session;
    private _loader;
    private _handler;
    private _manageSession;
    private _map;
    /**
     * Construct managed normal channel list
     * @param {TalkSession} _session
     * @param {ClientDataLoader} _loader
     * @param {TalkNormalChannel[]} list
     */
    constructor(_session: TalkSession, _loader: ClientDataLoader, list: TalkNormalChannel[]);
    get size(): number;
    get(channelId: Long): TalkNormalChannel | undefined;
    all(): IterableIterator<TalkNormalChannel>;
    addChannel(channel: Channel, lastUpdate?: number): AsyncCommandResult<TalkNormalChannel>;
    removeChannel(channel: Channel): boolean;
    createChannel(template: ChannelTemplate): AsyncCommandResult<TalkNormalChannel>;
    createMemoChannel(): AsyncCommandResult<TalkNormalChannel>;
    leaveChannel(channel: Channel, block?: boolean): AsyncCommandResult<Long>;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkNormalChannelListEvents>): Promise<void>;
    /**
     * Initialize TalkChannelList using channelList.
     * @param {TalkNormalChannelList} talkChannelList
     * @param {LoginData<NormalChannelData>[]} channelList
     */
    static initialize(talkChannelList: TalkNormalChannelList, channelList?: LoginData<NormalChannelData>[]): Promise<TalkNormalChannelList>;
}
