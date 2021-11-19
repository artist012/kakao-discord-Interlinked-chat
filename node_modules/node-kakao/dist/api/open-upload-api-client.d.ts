import { OpenLinkAnonProfile } from '../openlink';
import { AsyncCommandResult } from '../request';
import { OpenProfilePostUploadStruct, OpenProfileUploadStruct } from './struct';
import { WebClient } from './web-client';
/**
 * OpenLink profile, link post upload api
 */
export declare class OpenUploadApiClient {
    private _client;
    constructor(client: WebClient);
    /**
     * Upload openlink profile image
     *
     * @param {string} name filename
     * @param {Uint8Array} file
     * @param {string} [contentType='image/jpeg']
     * @return {AsyncCommandResult<OpenProfileUploadStruct>}
     */
    uploadLinkImage(name: string, file: Uint8Array, contentType?: string): AsyncCommandResult<OpenProfileUploadStruct>;
    /**
     * Upload openlink profile post image
     *
     * @param {string} name filename
     * @param {Uint8Array} file
     * @param {string} [contentType='image/jpeg']
     * @return {AsyncCommandResult<OpenProfileUploadStruct>}
     */
    uploadLinkPostImage(name: string, file: Uint8Array, contentType?: string): AsyncCommandResult<OpenProfilePostUploadStruct>;
    /**
     * Create default OpenUploadApiClient.
     */
    static create(): Promise<OpenUploadApiClient>;
}
export declare namespace OpenUploadAPI {
    function getOriginalLinkImageURL(accessKey: string): string;
    function getSmallLinkImageURL(accessKey: string): string;
    function getLargeLinkImageURL(accessKey: string): string;
    /**
     * Upload profile image and construct OpenLink anon profile using nickname.
     *
     * @param {string} nickname Profile nickname
     * @param {Uint8Array} profile Profile image
     * @return {AsyncCommandResult<OpenLinkAnonProfile>}
     */
    function buildProfile(nickname: string, profile: Uint8Array): AsyncCommandResult<OpenLinkAnonProfile>;
}
