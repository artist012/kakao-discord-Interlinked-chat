import { TypedListeners } from './typed';
export interface ContextEmitter<T extends TypedListeners<T>> {
    emit: <U extends keyof T>(event: U, ...args: Parameters<T[U]>) => void;
}
/**
 * Create event reverse traversal tree structure
 */
export declare class EventContext<T extends TypedListeners<T>> implements ContextEmitter<T> {
    private _emitterList;
    constructor(...emitters: ContextEmitter<T>[]);
    emit<U extends keyof T>(event: U, ...args: Parameters<T[U]>): void;
}
