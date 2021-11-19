import { NormalMemberStruct, OpenMemberStruct } from '../struct';
export interface GetMemRes {
    /**
     * Member list
     */
    members: NormalMemberStruct[] | OpenMemberStruct[];
    /**
     * Last update time
     */
    token: number;
}
