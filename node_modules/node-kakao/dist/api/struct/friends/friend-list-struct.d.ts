import { FriendStruct } from './friend-struct';
import { Long } from 'bson';
export interface FriendListStruct {
    token: Long;
    friends: FriendStruct[];
}
