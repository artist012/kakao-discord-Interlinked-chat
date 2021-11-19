import { Channel, NormalChannelInfo, NormalChannelSession } from '../../channel';
import { TalkSession } from '../client';
import { AsyncCommandResult } from '../../request';
import { ChatOnRoomRes } from '../../packet/chat';
import { ChannelUser, NormalChannelUserInfo } from '../../user';
/**
 * Default NormalChannelSession implementation
 */
export declare class TalkNormalChannelSession implements NormalChannelSession {
    private _channel;
    private _session;
    currentMsgId: number;
    constructor(channel: Channel, session: TalkSession);
    get session(): TalkSession;
    chatON(): AsyncCommandResult<ChatOnRoomRes>;
    inviteUsers(users: ChannelUser[]): AsyncCommandResult;
    getLatestChannelInfo(): AsyncCommandResult<NormalChannelInfo>;
    getLatestUserInfo(...channelUsers: ChannelUser[]): AsyncCommandResult<NormalChannelUserInfo[]>;
    getAllLatestUserInfo(): AsyncCommandResult<NormalChannelUserInfo[]>;
}
