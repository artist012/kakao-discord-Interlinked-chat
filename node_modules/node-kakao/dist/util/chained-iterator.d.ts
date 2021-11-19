export declare class ChainedIterator<T> implements IterableIterator<T> {
    private _list;
    constructor(...list: Iterator<T>[]);
    [Symbol.iterator](): ChainedIterator<T>;
    next(): IteratorResult<T>;
}
