export * from './fixed';
/**
 * Stream instance holds specific input or output resource
 */
export interface Stream {
    /**
     * Indicate current stream is ended or not
     */
    readonly ended: boolean;
    /**
     * Close current stream
     */
    close(): void;
}
/**
 * Readable stream.
 * Data can be read from stream.
 */
export interface ReadStream extends Stream {
    /**
     * Read data up to size bytes.
     *
     * @param buffer Read buffer
     * @return Read size or null on ended
     */
    read(buffer: Uint8Array): Promise<number | null>;
}
/**
 * Additional Readstream util
 */
export declare namespace ReadStreamUtil {
    /**
     * Create AsyncIterableIterator which read stream buffers up to size bytes.
     *
     * @param {ReadStream} stream
     * @param {number} [size=65535]
     * @return {AsyncIterableIterator<Uint8Array>}
     */
    function iter(stream: ReadStream, size?: number): AsyncIterableIterator<Uint8Array>;
    /**
     * Read every data to end of stream.
     *
     * @param {ReadStream} stream
     */
    function all(stream: ReadStream): Promise<Uint8Array>;
    /**
     * Read exact size bytes into Uint8Array or null if the stream ends before to fill all.
     *
     * @param {ReadStream} stream
     * @param {number} size
     */
    function exact(stream: ReadStream, size: number): Promise<Uint8Array | null>;
    /**
     * Write every read data from ReadStream to WriteStream.
     *
     * @param {ReadStream} read Stream to be read
     * @param {WriteStream} write Stream to be written
     * @return {Promise<number>} Bytes written.
     */
    function copy(read: ReadStream, write: WriteStream): Promise<number>;
}
/**
 * Writable stream.
 * Data can be written to stream.
 */
export interface WriteStream extends Stream {
    /**
     * Write data. Written size is always same as data.byteLength, unless the stream ends during writing.
     *
     * @param data
     * @return Written size
     */
    write(data: Uint8Array): Promise<number>;
}
/**
 * Read / write stream
 */
export interface BiStream extends ReadStream, WriteStream {
}
