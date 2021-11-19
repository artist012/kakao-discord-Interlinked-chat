import { LocoPacket } from '../packet';
import { BiStream } from '../stream';
/**
 * Write / Read loco packet to stream
 */
export declare class LocoPacketCodec {
    private _stream;
    constructor(stream: BiStream);
    get stream(): BiStream;
    write(packet: LocoPacket): Promise<number>;
    read(): Promise<LocoPacket | undefined>;
}
