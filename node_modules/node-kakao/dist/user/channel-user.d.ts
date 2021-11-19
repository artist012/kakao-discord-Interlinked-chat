import { Long } from 'bson';
import { OpenLinkComponent } from '../openlink';
/**
 * Any user that can talk via channel.
 */
export interface ChannelUser {
    /**
     * Unique identifier
     */
    userId: Long;
}
export interface OpenChannelUser extends ChannelUser, Partial<OpenLinkComponent> {
}
