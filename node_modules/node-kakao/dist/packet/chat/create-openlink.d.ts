import { ChannelInfoStruct, InformedOpenLinkStruct } from '../struct';
export interface CreateOpenLinkRes {
    ol: InformedOpenLinkStruct;
    chatRoom?: ChannelInfoStruct;
}
