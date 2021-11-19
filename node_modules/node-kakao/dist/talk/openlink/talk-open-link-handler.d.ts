import { Long } from 'bson';
import { EventContext, TypedEmitter } from '../../event';
import { OpenLinkService, InformedOpenLink } from '../../openlink';
import { DefaultRes } from '../../request';
import { OpenLinkEvent } from '../event';
import { Managed } from '../managed';
export interface OpenLinkUpdater {
    addClientLink(link: InformedOpenLink): void;
    deleteClientLink(linkId: Long): boolean;
}
export declare class TalkOpenLinkHandler implements Managed<OpenLinkEvent> {
    private _service;
    private _emitter;
    private _updater;
    constructor(_service: OpenLinkService, _emitter: TypedEmitter<OpenLinkEvent>, _updater: OpenLinkUpdater);
    private _callEvent;
    pushReceived(method: string, data: DefaultRes, parentCtx: EventContext<OpenLinkEvent>): Promise<void>;
}
