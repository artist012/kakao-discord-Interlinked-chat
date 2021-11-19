import { AsyncCommandResult } from '../../request';
import { ChannelUser } from '../../user';
import { TalkSession } from '../client';
/**
 * Provide user block / unblock api.
 * Note: To get block list use web api.
 */
export declare class TalkBlockSession {
    private _session;
    constructor(_session: TalkSession);
    /**
       * Block normal user
       *
       * @param {ChannelUser} user
       * @param {TalkBlockType} type
       */
    blockUser(user: ChannelUser, type?: TalkBlockType): AsyncCommandResult;
    /**
       * Block plus user
       *
       * @param {ChannelUser} plusUser
       * @param {TalkBlockType} type
       */
    blockPlusUser(plusUser: ChannelUser, type?: TalkBlockType): AsyncCommandResult;
    /**
       * Unblock normal user.
       *
       * @param {ChannelUser} user
       */
    unblockUser(user: ChannelUser): Promise<{
        success: boolean;
        status: number;
    }>;
    /**
       * Unblock plus user.
       *
       * @param {ChannelUser} plusUser
       */
    unblockPlusUser(plusUser: ChannelUser): Promise<{
        success: boolean;
        status: number;
    }>;
}
export declare enum TalkBlockType {
    BLOCK = 0,
    BLOCK_HIDE_PROFILE = 1
}
