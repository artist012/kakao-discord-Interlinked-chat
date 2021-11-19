import { WebClient, HeaderDecorator, RequestForm, RequestHeader, RequestMethod } from './web-client';
/**
 * WebClient implementation wrapped with fetch api
 */
export declare class FetchWebClient implements WebClient, HeaderDecorator {
    scheme: string;
    host: string;
    private _decorator?;
    constructor(scheme: string, host: string, _decorator?: HeaderDecorator | undefined);
    get url(): string;
    toApiURL(path: string): string;
    fillHeader(header: RequestHeader): void;
    private buildFetchReqData;
    request(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
    requestMultipart(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
    protected convertToMultipart(form: RequestForm): FormData;
}
