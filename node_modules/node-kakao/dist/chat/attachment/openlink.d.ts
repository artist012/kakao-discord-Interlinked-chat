import { PostAttachment } from './post';
export interface OpenScheduleAttachment extends PostAttachment {
    /**
     * Schedule item id(?)
     */
    scheduleId: number;
    /**
     * Title
     */
    title: string;
    /**
     * Schedule start time
     */
    eventAt: number;
}
