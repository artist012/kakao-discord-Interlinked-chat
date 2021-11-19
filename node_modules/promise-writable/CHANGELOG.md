# Changelog

## v6.0.0 2020-08-09

- Requires Node >= 10.
- Converted from tslint to eslint.
- Uses @types/node v14.

## v5.0.4 2019-12-25

- Updated dependencies.

## v5.0.3 2019-10-07

- Use `mocha-steps` for testing.

## 5.0.2 2019-10-07

- Updated dependencies.

## 5.0.1 2019-07-15

- Fixed fatal bug in `writeAll` that caused this method could be blocked.

## 5.0.0 2019-07-14

- Breaking change: `writeAll` should not close the stream. Fixes #2.

## v4.1.1 2019-06-04

- Minor tweaks in README.
- Added source map to the package.

## v4.1.0 2019-05-10

- Tweaks to make it compatible with new `PromiseDuplex`.

## v4.0.0 2019-05-09

- Rewritten in Typescript.
- `PromiseWritable` constructor accepts `NodeJS.WritableStream`.
- `write` method uses `encoding` argument if `chunk` is string.
- Dropped support for Node < 6.

## v3.1.2 2018-02-13

- Use markdownlint.

## v3.1.1 2018-02-05

- Can call `destroy` twice.

## v3.1.0 2018-02-04

- Support `import PromiseWritable from 'promise-writable'` syntax.

## v3.0.0 2018-02-03

- New method `destroy`.
- Bugfix when `PromiseWritable` could ignore `error` event.
- `writeAll` corks stream and waits for `drain` event.

## v2.1.1 2017-10-10

- Typescript: `once('pipe' | 'unpipe')` resolves to `Readable`.

## v2.1.0 2017-10-10

- Typescript: `PromiseWritable<TWritable extends Writable>`.

## v2.0.1 2017-10-06

- Do not use UMD import internally.

## v2.0.0 2017-10-06

- Use native `Promise` rather than `any-event`.

## v1.3.1 2017-10-06

- Typescript: reference additional modules in our typings file.

## v1.3.0 2017-10-03

- `once(event)` is resolved to `undefined` when stream is already closed or
  destroyed.

## v1.2.1 2017-10-02

- Fixed `instanceof PromiseWritable`.

## v1.2.0 2017-10-01

- Typescript: stream is `TWritable extends NodeJS.WritableStream`.

## v1.1.0 2017-10-01

- PromiseDuplex object is instance of PromiseWritable.

## v1.0.0 2017-09-29

- Exports also as a class and namespace and the default.
- Typings for Typescript.
- Additional safe checks for detecting already closed stream.
- Promise for `write` or `writeAll` resolves to number of written bytes.

## v0.1.4 2017-06-22

- Upgraded chai@4.0.2, chai-as-promised@7.0.0, snazzy@7.0.0,
  standard@10.0.2, tap@10.5.1, tap-given@0.4.1

## v0.1.3 2017-03-16

- Minor tweaks for documentation.

## v0.1.2 2017-03-14

- Default chunk size for writeAll is now 64KiB.

## v0.1.1 2017-03-14

- `once('error')` is the same as `once('finish')`.

## v0.1.0 2017-03-14

- New method `once` replaces other `once*` methods.

## v0.0.1 2017-03-10

- Initial release
