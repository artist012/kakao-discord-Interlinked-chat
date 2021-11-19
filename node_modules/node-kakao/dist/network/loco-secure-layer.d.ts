import { CryptoStore } from '../crypto';
import { BiStream } from '../stream';
/**
 * Loco secure layer that encrypt outgoing packets
 */
export declare class LocoSecureLayer implements BiStream {
    private _stream;
    private _crypto;
    private _handshaked;
    private _dataChunks;
    constructor(socket: BiStream, crypto: CryptoStore);
    read(buffer: Uint8Array): Promise<number | null>;
    get ended(): boolean;
    get crypto(): CryptoStore;
    /**
     * @return {BiStream} original stream
     */
    get stream(): BiStream;
    /**
     * @return {boolean} true if handshake sent.
     */
    get handshaked(): boolean;
    write(data: Uint8Array): Promise<number>;
    protected sendHandshake(): Promise<void>;
    close(): void;
}
