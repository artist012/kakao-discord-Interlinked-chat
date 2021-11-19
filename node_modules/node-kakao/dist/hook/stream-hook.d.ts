import { BiStream } from '../stream';
export interface StreamHook {
    /**
     * Hook data write
     *
     * @param data Write data
     */
    onWrite(data: Uint8Array): void;
    /**
     * Hook data read
     *
     * @param buf Read buffer
     * @param read Read size
     */
    onRead(buf: Uint8Array, read: number | null): void;
    onClose(): void;
}
export declare class HookedStream implements BiStream {
    private _stream;
    hook: Partial<StreamHook>;
    constructor(_stream: BiStream, hook?: Partial<StreamHook>);
    get ended(): boolean;
    write(data: Uint8Array): Promise<number>;
    read(buffer: Uint8Array): Promise<number | null>;
    close(): void;
}
