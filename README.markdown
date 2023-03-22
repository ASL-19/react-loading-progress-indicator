# @asl-19/react-loading-progress-indicator

- [API](#api)
- [How to install](#how-to-install)
- [Compatibility](#compatibility)
- [Limitations](#limitations)

React loading progress indicator component. Developed for ASL19 projects.

Inspired by [NProgress](https://github.com/rstacruz/nprogress) and [react-nprogress](https://github.com/tanem/react-nprogress).

## API

See [`docs/react-loading-progress-indicator.md`](./docs/react-loading-progress-indicator.md) for API documentation.

## How to install

```sh
npm install @asl-19/react-loading-progress-indicator
```

## Compatibility

This package is developed and used with Node.js 18. The code should be forward-compatible, but use with other Node.js versions is untested and unsupported.

## Limitations

- It isn’t possible to manually set the progress. The progress increases at a set rate until almost full (or [isLoading](./docs/react-loading-progress-indicator.loadingprogressindicatorprops.isLoading.md) is false).

- It isn’t possible to adjust the rate at which the progress increases (e.g. slow down the loading progress as it approaches 1). The progress increases at a set rate.

- The loading indicator accepts custom styles via the [getStyle](./docs/react-loading-progress-indicator.loadingprogressindicatorprops.getstyle.md) prop, but the styling possibilities are limited by the fact that the loading indicator is a single `<div>` element.

- There are no tests!
