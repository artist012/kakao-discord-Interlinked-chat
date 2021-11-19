# Changelog

## v6.0.0 2020-08-10

- Requires Node >= 10.
- Converted from tslint to eslint.
- Uses @types/node v14. Fixes #41.

## v5.0.3 2019-12-25

- promise-readable@5.0.4: chunk returned by `read` method might be an empty
  string.

## v5.0.2 2019-10-07

- Use `mocha-steps` for testing.

## v5.0.1 2019-10-07

- Compatibility with newer NodeJS typings.
- Updated dependencies.

## v5.0.0 2019-07-15

- Uses promise-readable and promise-writable v5.
- `PromiseReadable` implements `AsyncIterable` so it is possible to use
  `for await (const chunk of promiseReadable)` loop.
- New method `iterate` is provided.

## v4.0.3 2019-06-04

- Minor tweaks in README.
- Added source map to the package.

## v4.0.2 2019-05-10

- Fixed regression in `package.json`.

## v4.0.1 2019-05-10

- Fixed regression in `index.js`.

## v4.0.0 2019-05-10

- Rewritten in Typescript.
- Dropped support for Node < 6.

## v3.0.3 2018-03-12

- Use markdownlint.

## v3.0.2 2018-02-05

- Minor bugfix in error handler.

## v3.0.1 2018-02-05

- Can call `destroy` twice.

## v3.0.0 2018-02-04

- New `setEncoding` and `destroy` methods.
- Support for `import PromiseDuplex from 'promise-duplex'` syntax.
- Bugfix when PromiseDuplex could ignore error event.
- Upgraded promise-readable@3.1.1 and promise-writable@3.1.0

## v2.0.4 2018-01-18

- Upgraded promise-readable@2.1.1

## v2.0.3 2017-10-17

- Workaround for bug in @types/node. See
  <https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20493>

## v2.0.2 2017-10-10

- Typescript: `once('pipe' | 'unpipe')` resolves to `Readable`.

## v2.0.1 2017-10-06

- Do not use UMD import internally.

## v2.0.0 2017-10-06

- Use native `Promise` rather than `any-event`.

## v1.1.2 2017-10-06

- Typescript: reference additional modules in our typings file.

## v1.1.1 2017-10-03

- Better README.

## v1.1.0 2017-10-03

- `once` is resolved to `undefined` when stream is already closed or
  destroyed for `"close"` or `"end"` events and rejects for others.
- `read` and `readAll` is resolved when `"close"` event was occured.

## v1.0.0 2017-10-02

- Exports also as a class and namespace and the default.
- Typings for Typescript.
- Based on promise-readable@1.x.x and promise-writable@1.x.x

_Breaking change:_

- Resolves to `undefined` rather than `null` if there is no data or stream is
  closed. Please use double sign equality instead triple sign to check if
  stream is closed, ie. `data == null`.

## v0.1.2 2017-06-22

- Upgraded chai@4.0.2, chai-as-promised@7.0.0, promise-readable@0.4.3,
  promise-writable@0.1.4, snazzy@7.0.0, standard@10.0.2, tap@10.5.1,
  tap-given@0.4.1

## v0.1.1 2017-03-16

- Minor tweaks for documentation.

## v0.1.0 2017-03-14

- New method `once` replaces other `once*` methods.

## v0.0.2 2017-03-12

- Use any-promise.

## v0.0.1 2017-03-12

- Initial release
