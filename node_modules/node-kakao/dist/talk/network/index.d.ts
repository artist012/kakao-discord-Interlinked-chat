import { BookingConfig, CheckinConfig, SessionConfig } from '../../config';
import { ConnectionSession, SessionFactory } from '../../network';
import { AsyncCommandResult } from '../../request';
import { GetConfRes } from '../../packet/booking';
import { CheckinRes } from '../../packet/checkin';
import { Long } from 'bson';
/**
 * Create loco stream by performing booking and checkin.
 */
export declare class TalkSessionFactory implements SessionFactory {
    getConf(config: BookingConfig): AsyncCommandResult<GetConfRes>;
    getCheckin(userId: Long, config: CheckinConfig): AsyncCommandResult<CheckinRes>;
    connect(userId: Long, config: SessionConfig): AsyncCommandResult<ConnectionSession>;
}
