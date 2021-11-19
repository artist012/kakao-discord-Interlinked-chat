import { ChannelData, ChannelInfo } from '../channel';
import { OpenChannel } from './open-channel';
import { OpenLink, OpenTokenComponent } from '.';
/**
 * Open channel info
 */
export interface OpenChannelInfo extends ChannelInfo, OpenChannel, OpenTokenComponent {
    /**
     * true if direct channel
     */
    directChannel: boolean;
    openLink?: OpenLink;
}
export declare namespace OpenChannelInfo {
    function createPartial(info: Partial<OpenChannelInfo>): OpenChannelInfo;
}
export interface OpenChannelData extends OpenChannel, ChannelData<OpenChannelInfo> {
}
