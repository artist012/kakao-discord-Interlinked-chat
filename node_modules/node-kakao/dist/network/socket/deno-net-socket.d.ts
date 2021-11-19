import { NetSocketOptions } from '.';
import { BiStream } from '../../stream';
export declare class DenoSocket implements BiStream {
    private _conn;
    private _ended;
    constructor(_conn: Deno.Conn);
    get ended(): boolean;
    read(buffer: Uint8Array): Promise<number | null>;
    write(data: Uint8Array): Promise<number>;
    close(): void;
    static connect(option: NetSocketOptions): Promise<BiStream>;
    static connectTls(option: NetSocketOptions): Promise<BiStream>;
}
