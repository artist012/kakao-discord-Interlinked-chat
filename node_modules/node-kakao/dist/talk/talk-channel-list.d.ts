import { Long } from 'bson';
import { ChannelStore, LoginData, NormalChannelData } from '../channel';
import { TalkSession } from './client';
import { EventContext, TypedEmitter } from '../event';
import { InformedOpenLink, OpenChannelData } from '../openlink';
import { DefaultRes } from '../request';
import { ChainedIterator } from '../util';
import { ChannelListEvents } from './event';
import { Managed } from './managed';
import { TalkOpenChannel, TalkOpenChannelList } from './openlink';
import { TalkChannel, TalkNormalChannel, TalkNormalChannelList } from './channel';
import { ChannelUserInfo } from '../user';
import { ClientDataLoader } from '../loader';
declare type TalkChannelListEvents = ChannelListEvents<TalkChannel, ChannelUserInfo>;
/**
 * Manage normal channels and open channels
 */
export declare class TalkChannelList extends TypedEmitter<TalkChannelListEvents> implements Managed<TalkChannelListEvents>, ChannelStore<TalkChannel> {
    private _normal;
    private _open;
    /**
     * Construct managed channel list
     * @param {TalkSession} session
     * @param {ClientDataLoader} loader
     * @param {TalkNormalChannel[]} normalList
     * @param {TalkOpenChannel[]} openList
     * @param {InformedOpenLink[]} clientLinkList
     */
    constructor(session: TalkSession, loader: ClientDataLoader, normalList?: TalkNormalChannel[], openList?: TalkOpenChannel[], clientLinkList?: InformedOpenLink[]);
    get size(): number;
    /**
     * Normal channel list
     */
    get normal(): TalkNormalChannelList;
    /**
     * Open channel list
     */
    get open(): TalkOpenChannelList;
    get(channelId: Long): TalkNormalChannel | TalkOpenChannel | undefined;
    all(): ChainedIterator<TalkChannel>;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkChannelListEvents>): Promise<void>;
    /**
     * Initialize TalkChannelList using channelList.
     * @param {TalkChannelList} talkChannelList
     * @param {LoginData<NormalChannelData | OpenChannelData>[]} channelList
     */
    static initialize(talkChannelList: TalkChannelList, channelList?: LoginData<NormalChannelData | OpenChannelData>[]): Promise<TalkChannelList>;
    /**
     * Split normal channel and open channel
     *
     * @param {LoginData<NormalChannelData | OpenChannelData>[]} channelList
     * @return {[LoginData<NormalChannelData>[], LoginData<OpenChannelData>[]]}
     */
    static mapChannelList(channelList: LoginData<NormalChannelData | OpenChannelData>[]): [LoginData<NormalChannelData>[], LoginData<OpenChannelData>[]];
}
export {};
