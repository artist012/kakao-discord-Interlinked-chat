export declare class ChunkedArrayBufferList {
    private _total;
    private _list;
    constructor();
    get byteLength(): number;
    get count(): number;
    append(buf: Uint8Array): void;
    toBuffer(): Uint8Array;
    clear(): void;
}
