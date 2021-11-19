import { LocoPacket, LocoPacketDataCodec } from '../packet';
/**
 * Construct LocoPacket object from packet data.
 * Deconstruct LocoPacket into packet data.
 */
export declare class PacketAssembler<T, R> {
    private _currentId;
    private _dataCodec;
    constructor(dataCodec: LocoPacketDataCodec<T, R>);
    /**
     * Construct LocoPacket with given method and data
     *
     * @param {string} method
     * @param {T} data
     * @return {LocoPacket}
     */
    construct(method: string, data: T): LocoPacket;
    /**
     * Deconstruct LocoPacket into data.
     * This method can throw error if the type is not supported by codec.
     *
     * @template R
     * @param {LocoPacket} packet
     * @return {R}
     */
    deconstruct(packet: LocoPacket): R;
}
