import { ReadStream, WriteStream } from '.';
interface FixedStream {
    /**
     * Returns true if operation has done and cannot be written / read more
     */
    readonly done: boolean;
    /**
     * Total size that can be write or read
     */
    readonly size: number;
}
/**
 * Fixed sized stream that can be used for reading.
 * Extra bytes are removed.
 */
export declare class FixedReadStream implements ReadStream, FixedStream {
    private _stream;
    private _size;
    private _read;
    constructor(_stream: ReadStream, _size: number);
    get size(): number;
    /**
     * Read size
     */
    get readSize(): number;
    get done(): boolean;
    read(buffer: Uint8Array): Promise<number | null>;
    get ended(): boolean;
    close(): void;
}
export declare class FixedWriteStream implements WriteStream, FixedStream {
    private _stream;
    private _size;
    private _written;
    constructor(_stream: WriteStream, _size: number);
    get size(): number;
    get done(): boolean;
    /**
     * Written size
     */
    get written(): number;
    write(data: Uint8Array): Promise<number>;
    get ended(): boolean;
    close(): void;
}
export {};
