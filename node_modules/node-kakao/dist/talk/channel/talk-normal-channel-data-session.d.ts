import { NormalChannelInfo, NormalChannelSession, UpdatableChannelDataStore } from '../../channel';
import { ChatOnRoomRes } from '../../packet/chat';
import { AsyncCommandResult } from '../../request';
import { ChannelUser, NormalChannelUserInfo } from '../../user';
/**
 * Do normal channel session operations and updates store.
 */
export declare class TalkNormalChannelDataSession implements NormalChannelSession {
    private _clientUser;
    private _channelSession;
    private _store;
    constructor(_clientUser: ChannelUser, _channelSession: NormalChannelSession, _store: UpdatableChannelDataStore<NormalChannelInfo, NormalChannelUserInfo>);
    get clientUser(): Readonly<ChannelUser>;
    get store(): UpdatableChannelDataStore<NormalChannelInfo, NormalChannelUserInfo>;
    inviteUsers(users: ChannelUser[]): AsyncCommandResult;
    chatON(): AsyncCommandResult<ChatOnRoomRes>;
    getLatestChannelInfo(): AsyncCommandResult<NormalChannelInfo>;
    getLatestUserInfo(...users: ChannelUser[]): AsyncCommandResult<NormalChannelUserInfo[]>;
    getAllLatestUserInfo(): AsyncCommandResult<NormalChannelUserInfo[]>;
}
