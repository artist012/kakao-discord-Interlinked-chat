import { OpenLinkChannelUserInfo, OpenLinkKickedUserInfo } from '../../../openlink';
import { NormalChannelUserInfo, OpenChannelUserInfo } from '../../../user';
import { NormalMemberStruct, OpenLinkChannelUserStruct, OpenLinkKickedMemberStruct, OpenMemberStruct } from '../user';
export declare function structToChannelUserInfo(struct: NormalMemberStruct): NormalChannelUserInfo;
export declare function structToOpenChannelUserInfo(struct: OpenMemberStruct): OpenChannelUserInfo;
export declare function structToOpenLinkChannelUserInfo(struct: OpenLinkChannelUserStruct): OpenLinkChannelUserInfo;
export declare function structToOpenLinkKickedUserInfo(struct: OpenLinkKickedMemberStruct): OpenLinkKickedUserInfo;
