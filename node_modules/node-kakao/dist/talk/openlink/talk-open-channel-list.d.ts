import { Long } from 'bson';
import { Channel, ChannelStore, LoginData } from '../../channel';
import { TalkSession } from '../client';
import { EventContext, TypedEmitter } from '../../event';
import { InformedOpenLink, OpenChannel, OpenChannelData, OpenChannelManageSession, OpenLink, OpenLinkChannelTemplate, OpenLinkComponent, OpenLinkCreateTemplate, OpenLinkKickedUser, OpenLinkKickedUserInfo, OpenLinkProfiles, OpenLinkProfileTemplate, OpenLinkService, OpenLinkSession, OpenLinkUpdateTemplate } from '../../openlink';
import { AsyncCommandResult, DefaultRes } from '../../request';
import { ChannelListUpdater } from '../channel';
import { OpenChannelListEvents } from '../event';
import { Managed } from '../managed';
import { TalkOpenChannel } from './talk-open-channel';
import { OpenLinkUpdater } from './talk-open-link-handler';
import { OpenChannelUserInfo } from '../../user';
import { ClientDataLoader } from '../../loader';
export declare type TalkOpenChannelListEvents = OpenChannelListEvents<TalkOpenChannel, OpenChannelUserInfo>;
/**
 * Manage open profile, channel.
 */
export declare class TalkOpenChannelList extends TypedEmitter<TalkOpenChannelListEvents> implements Managed<TalkOpenChannelListEvents>, OpenChannelManageSession, ChannelStore<TalkOpenChannel>, OpenLinkSession, ChannelListUpdater<TalkOpenChannel>, OpenLinkUpdater {
    private _session;
    private _loader;
    private _handler;
    private _openHandler;
    private _linkStore;
    private _manageSession;
    private _map;
    constructor(_session: TalkSession, _loader: ClientDataLoader, list: TalkOpenChannel[], clientLinkList: InformedOpenLink[]);
    get linkService(): OpenLinkService;
    /**
     * @param {InformedOpenLink} link
     * @deprecated
     */
    addClientLink(link: InformedOpenLink): void;
    /**
     * @param {Long} linkId
     * @return {boolean}
     * @deprecated
     */
    deleteClientLink(linkId: Long): boolean;
    removeChannel(channel: Channel): boolean;
    addChannel(channel: Channel): AsyncCommandResult<TalkOpenChannel>;
    get(channelId: Long): TalkOpenChannel | undefined;
    /**
     * Find open channel using linkId
     *
     * @deprecated
     * @param {Long} linkId
     * @return {TalkOpenChannel | undefined}
     */
    getChannelByLinkId(linkId: Long): TalkOpenChannel | undefined;
    /**
     * Find all open channel using same linkId
     *
     * @param {Long} linkId
     * @return {TalkOpenChannel[]}
     */
    getLinkChannelList(linkId: Long): TalkOpenChannel[];
    get size(): number;
    all(): IterableIterator<TalkOpenChannel>;
    /**
     * @return {IterableIterator<InformedOpenLink>}
     * @deprecated
     */
    allClientLink(): IterableIterator<InformedOpenLink>;
    /**
     * @param {Long} linkId
     * @return {InformedOpenLink | undefined}
     * @deprecated
     */
    getClientLink(linkId: Long): InformedOpenLink | undefined;
    /**
     * @deprecated
     */
    get clientLinkCount(): number;
    addOpenChannel(channel: OpenChannel, lastUpdate?: number): AsyncCommandResult<TalkOpenChannel>;
    leaveKicked(channel: OpenChannel): AsyncCommandResult;
    leaveChannel(channel: Channel): AsyncCommandResult<Long>;
    getLatestLinkList(): AsyncCommandResult<Readonly<InformedOpenLink>[]>;
    getOpenLink(...components: OpenLinkComponent[]): AsyncCommandResult<Readonly<OpenLink>[]>;
    getJoinInfo(linkURL: string, referer?: string): AsyncCommandResult<Readonly<InformedOpenLink>>;
    getKickList(link: OpenLinkComponent): AsyncCommandResult<OpenLinkKickedUserInfo[]>;
    removeKicked(link: OpenLinkComponent, kickedUser: OpenLinkKickedUser): AsyncCommandResult;
    deleteLink(link: OpenLinkComponent): AsyncCommandResult;
    react(link: OpenLinkComponent, flag: boolean): AsyncCommandResult;
    getReaction(link: OpenLinkComponent): AsyncCommandResult<[number, boolean]>;
    createOpenChannel(template: OpenLinkChannelTemplate & OpenLinkCreateTemplate, profile: OpenLinkProfiles): AsyncCommandResult<TalkOpenChannel>;
    createOpenDirectProfile(template: OpenLinkChannelTemplate & OpenLinkCreateTemplate, profile: OpenLinkProfiles): AsyncCommandResult<InformedOpenLink>;
    createOpenProfile(template: OpenLinkProfileTemplate & OpenLinkCreateTemplate): AsyncCommandResult<InformedOpenLink>;
    updateOpenLink(link: OpenLinkComponent, settings: (OpenLinkChannelTemplate | OpenLinkProfileTemplate) & OpenLinkUpdateTemplate): AsyncCommandResult<InformedOpenLink>;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<TalkOpenChannelListEvents>): Promise<void>;
    joinChannel(link: OpenLinkComponent, profile: OpenLinkProfiles, passcode?: string): AsyncCommandResult<TalkOpenChannel>;
    /**
     * Initialize TalkChannelList using channelList.
     * @param {TalkOpenChannelList} talkChannelList
     * @param {LoginData<OpenChannelData>[]} channelList
     */
    static initialize(talkChannelList: TalkOpenChannelList, channelList?: LoginData<OpenChannelData>[]): Promise<TalkOpenChannelList>;
}
