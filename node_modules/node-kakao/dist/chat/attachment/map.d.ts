import { Attachment } from '.';
export interface MapAttachment extends Attachment {
    /**
     * Latitude (multiplied by 10000000000)
     */
    lat: number;
    /**
     * Longitude (multiplied by 10000000000)
     */
    lng: number;
    /**
     * Map address
     */
    a: string;
    /**
     * true if using kakao map
     */
    c: boolean;
}
