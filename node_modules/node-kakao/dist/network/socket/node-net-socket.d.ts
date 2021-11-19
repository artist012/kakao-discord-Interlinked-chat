import { BiStream } from '../../stream';
import { NetSocketOptions } from '.';
export declare class NodeSocket implements BiStream {
    private _socket;
    private _ended;
    private _chunks;
    private constructor();
    read(buffer: Uint8Array): Promise<number | null>;
    get ended(): boolean;
    write(data: Uint8Array): Promise<number>;
    close(): void;
    static connect(option: NetSocketOptions): Promise<BiStream>;
    static connectTls(option: NetSocketOptions): Promise<BiStream>;
}
