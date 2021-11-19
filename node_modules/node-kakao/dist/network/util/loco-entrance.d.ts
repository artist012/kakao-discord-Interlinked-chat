import { Long } from 'bson';
import { BookingConfig, CheckinConfig } from '../../config';
import { GetConfRes } from '../../packet/booking';
import { CheckinRes } from '../../packet/checkin';
import { AsyncCommandResult } from '../../request';
import { BiStream } from '../../stream';
/**
 * Do booking process and return result.
 * Official server require tls.
 *
 * @param {BiStream} stream
 * @param {BookingConfig} config
 */
export declare function getBookingData(stream: BiStream, config: BookingConfig): AsyncCommandResult<GetConfRes>;
/**
 * Do checkin process and return result.
 * Official server require secure layer.
 *
 * @param {BiStream} stream
 * @param {CheckinConfig} config
 * @param {Long} userId
 */
export declare function getCheckinData(stream: BiStream, config: CheckinConfig, userId: Long): AsyncCommandResult<CheckinRes>;
