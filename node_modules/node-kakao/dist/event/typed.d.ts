export declare type TypedListeners<L> = {
    [E in keyof L]: (...args: any[]) => unknown;
};
export declare type DefaultListeners = Record<string | symbol, (...args: unknown[]) => unknown>;
declare class TypedEmitterDecl<L extends TypedListeners<L> = DefaultListeners> {
    addListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeAllListeners(event?: keyof L): this;
    once<U extends keyof L>(event: U, listener: L[U]): this;
    on<U extends keyof L>(event: U, listener: L[U]): this;
    off<U extends keyof L>(event: U, listener: L[U]): this;
    emit<U extends keyof L>(event: U, ...args: Parameters<L[U]>): boolean;
    eventNames<U extends keyof L>(): U[];
    listenerCount(type: keyof L): number;
    listeners<U extends keyof L>(type: U): L[U][];
}
declare const TypedEmitter_base: new <L_1 extends TypedListeners<L_1>>() => TypedEmitterDecl<L_1>;
export declare class TypedEmitter<L extends TypedListeners<L>> extends TypedEmitter_base<L> {
}
export {};
