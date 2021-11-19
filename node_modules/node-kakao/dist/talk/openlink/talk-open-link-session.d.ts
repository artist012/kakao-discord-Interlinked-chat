import { TalkSession } from '../client';
import { InformedOpenLink, OpenChannel, OpenLink, OpenLinkChannelTemplate, OpenLinkComponent, OpenLinkCreateTemplate, OpenLinkKickedUser, OpenLinkKickedUserInfo, OpenLinkProfiles, OpenLinkProfileTemplate, OpenLinkSession, OpenLinkUpdateTemplate } from '../../openlink';
import { AsyncCommandResult } from '../../request';
/**
 * Provides openlink operations
 */
export declare class TalkOpenLinkSession implements OpenLinkSession {
    private _session;
    private _lastLinkToken;
    constructor(_session: TalkSession);
    getLatestLinkList(): AsyncCommandResult<Readonly<InformedOpenLink>[]>;
    getOpenLink(...components: OpenLinkComponent[]): AsyncCommandResult<Readonly<OpenLink>[]>;
    getJoinInfo(linkURL: string, referer?: string): AsyncCommandResult<Readonly<InformedOpenLink>>;
    getKickList(link: OpenLinkComponent): AsyncCommandResult<OpenLinkKickedUserInfo[]>;
    removeKicked(link: OpenLinkComponent, user: OpenLinkKickedUser): AsyncCommandResult;
    deleteLink(link: OpenLinkComponent): AsyncCommandResult;
    react(link: OpenLinkComponent, flag: boolean): AsyncCommandResult;
    getReaction(link: OpenLinkComponent): AsyncCommandResult<[number, boolean]>;
    createOpenChannel(template: OpenLinkChannelTemplate & OpenLinkCreateTemplate, profile: OpenLinkProfiles): AsyncCommandResult<OpenChannel>;
    createOpenDirectProfile(template: OpenLinkChannelTemplate & OpenLinkCreateTemplate, profile: OpenLinkProfiles): AsyncCommandResult<InformedOpenLink>;
    createOpenProfile(template: OpenLinkProfileTemplate & OpenLinkCreateTemplate): AsyncCommandResult<InformedOpenLink>;
    updateOpenLink(link: OpenLinkComponent, settings: (OpenLinkChannelTemplate | OpenLinkProfileTemplate) & OpenLinkUpdateTemplate): AsyncCommandResult<InformedOpenLink>;
}
