import { Long } from 'bson';
import { NormalMemberStruct, OpenMemberStruct } from '../struct';
export interface MemberRes {
    /**
     * Channel id
     */
    chatId: Long;
    /**
     * Member list
     */
    members: NormalMemberStruct[] | OpenMemberStruct[];
}
