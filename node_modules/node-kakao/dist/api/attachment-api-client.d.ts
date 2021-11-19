import { WebClient } from '.';
import { ChatType, PathAttachment } from '../chat';
import { WebApiConfig } from '../config';
import { AsyncCommandResult } from '../request';
import { TextWebRequest } from './web-client';
/**
 * Web attachment upload api
 */
export declare class AttachmentApiClient {
    config: WebApiConfig;
    private _mediaClient;
    private _videoClient;
    private _audioClient;
    constructor(mediaClient: WebClient, videoClient: WebClient, audioClient: WebClient, config: WebApiConfig);
    private createHeader;
    upload(type: ChatType, filename: string, data: Uint8Array): AsyncCommandResult<PathAttachment>;
    protected getReqClient(type: ChatType): TextWebRequest;
    getMimeType(type: ChatType): string;
    /**
     * Create default AttachmentApiClient using config.
     *
     * @param {Partial<WebApiConfig>} config
     */
    static create(config?: Partial<WebApiConfig>): Promise<AttachmentApiClient>;
}
export declare namespace AttachmentApi {
    function upload(type: ChatType, filename: string, data: Uint8Array): AsyncCommandResult<PathAttachment>;
}
