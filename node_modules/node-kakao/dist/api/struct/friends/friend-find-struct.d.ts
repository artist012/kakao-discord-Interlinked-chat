import { FriendStruct } from './friend-struct';
import { Long } from 'bson';
export interface FriendFindIdStruct {
    token: Long;
    friend: FriendStruct;
}
export interface FriendFindUUIDStruct {
    member: FriendStruct;
}
