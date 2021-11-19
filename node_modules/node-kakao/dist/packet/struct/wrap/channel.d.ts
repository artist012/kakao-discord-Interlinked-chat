import { ChannelInfo, NormalChannelInfo } from '../../../channel';
import { OpenChannelInfo } from '../../../openlink';
import { ChannelDataStruct, ChannelInfoStruct, NormalChannelInfoExtra, OpenChannelInfoExtra } from '../channel';
export declare function structToChannelInfo(struct: ChannelInfoStruct): ChannelInfo;
export declare function structToNormalChannelInfo(struct: ChannelInfoStruct & NormalChannelInfoExtra): NormalChannelInfo;
export declare function structToOpenChannelInfo(struct: ChannelInfoStruct & OpenChannelInfoExtra): OpenChannelInfo;
export declare function dataStructToChannelInfo(channelData: ChannelDataStruct): ChannelInfo;
export declare function dataStructToNormalChannelInfo(channelData: ChannelDataStruct): NormalChannelInfo;
export declare function dataStructToOpenChannelInfo(channelData: ChannelDataStruct): OpenChannelInfo;
