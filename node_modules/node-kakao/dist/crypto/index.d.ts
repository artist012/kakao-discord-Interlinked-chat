/**
 * Stores keys and implement cipher / decipher
 */
export interface CryptoStore {
    toAESEncrypted(buffer: Uint8Array, iv: Uint8Array): Uint8Array;
    toAESDecrypted(buffer: Uint8Array, iv: Uint8Array): Uint8Array;
    toRSAEncrypted(buffer: Uint8Array): Uint8Array;
    randomCipherIV(): Uint8Array;
    getRSAEncryptedKey(): Uint8Array;
}
/**
 * Try to create CryptoStore by platform.
 *
 * @param {string} pubKey
 */
export declare function newCryptoStore(pubKey: string): Promise<CryptoStore>;
