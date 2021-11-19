export interface XVCProvider {
    toFullXVCKey(deviceUUID: string, userAgent: string, email: string): Promise<string>;
}
export declare const Win32XVCProvider: XVCProvider;
export declare const AndroidSubXVCProvider: XVCProvider;
