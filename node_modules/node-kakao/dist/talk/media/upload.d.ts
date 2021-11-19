import { MediaMetadata } from '../../media';
export interface MediaUploadTemplate extends MediaMetadata {
    /**
     * File data
     */
    data: Uint8Array;
}
