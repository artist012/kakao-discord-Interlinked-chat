import { FriendStruct } from './friend-struct';
export interface FriendSearchUserListStruct {
    count: number;
    list: FriendStruct[];
}
export interface FriendSearchStruct {
    query: string;
    user?: FriendSearchUserListStruct;
    plus?: FriendSearchUserListStruct;
    categories: string[];
    total_counts: number;
}
