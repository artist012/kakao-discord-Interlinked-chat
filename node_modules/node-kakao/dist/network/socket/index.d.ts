import { BiStream } from '../../stream';
export interface NetSocketOptions {
    host: string;
    port: number;
    keepAlive: boolean;
}
/**
 * Create TCP net stream using options.
 * This detect environment automatically.
 *
 * @param {NetSocketOptions} option
 */
export declare function createTCPSocket(option: NetSocketOptions): Promise<BiStream>;
/**
 * Create TCP TLS net stream using options.
 * This detect environment automatically.
 *
 * @param {NetSocketOptions} option
 */
export declare function createTLSSocket(option: NetSocketOptions): Promise<BiStream>;
