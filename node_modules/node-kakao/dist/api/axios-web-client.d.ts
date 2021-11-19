import { HeaderDecorator, RequestHeader, RequestMethod, RequestForm, WebClient } from './web-client';
import FormData from 'form-data';
/**
 * WebClient implementation wrapped with axios
 */
export declare class AxiosWebClient implements WebClient, HeaderDecorator {
    scheme: string;
    host: string;
    private _decorator?;
    constructor(scheme: string, host: string, _decorator?: HeaderDecorator | undefined);
    get url(): string;
    toApiURL(path: string): string;
    fillHeader(header: RequestHeader): void;
    private buildAxiosReqData;
    request(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
    requestMultipart(method: RequestMethod, path: string, form?: RequestForm, headers?: RequestHeader): Promise<ArrayBuffer>;
    protected convertToMultipart(form: RequestForm): FormData;
}
