# Versoly Plugins

[![npm package][npm-img]][npm-url] [![Build Status][build-img]][build-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Code Coverage][codecov-img]][codecov-url] [![Commitizen Friendly][commitizen-img]][commitizen-url] [![Semantic Release][semantic-release-img]][semantic-release-url]


## Install

```bash
pnpm install @versoly/plugins
```

## Usage

```ts
import { plugins } from '@versoly/plugins';

plugins['countup'].name
//=> 'Countup'
```

## Create a plugin

```ts
import { defineConfig } from '@versoly/plugins';

export const calendly = defineConfig({
  name: 'Calendly',
  cdnUrls: [
    {
      url: 'https://assets.calendly.com/assets/external/widget.js',
      delay: true,
    },
    {
      url: 'https://assets.calendly.com/assets/external/widget.css',
      delay: true,
    },
  ],
  js: `
document.querySelectorAll('[data-calendly-url]').forEach(a => {
  const url = a.getAttribute('data-calendly-url')

  if (!url) {
    return;
  }

  a.addEventListener('click', e => {
    e.preventDefault();
    window.Calendly.initPopupWidget({ url, parentElement: a})
  })
});`,
  checks: [{ plugin: 'calendly' }, { html: 'calendly' }],
  options: {
    name: 'Calendly Options',
    isShown: {
      props: {
        'data-calendly-url': true,
      },
    },
    fields: [
      {
        name: 'Calendly Url',
        propsName: 'data-calendly-url',
        type: 'TextOption',
      },
    ],
  },
});

```

[build-img]: https://github.com/versoly/plugins/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/versoly/plugins/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@versoly/plugins
[downloads-url]: https://www.npmtrends.com/@versoly/plugins
[npm-img]: https://img.shields.io/npm/v/@versoly/plugins
[npm-url]: https://www.npmjs.com/package/@versoly/plugins
[issues-img]: https://img.shields.io/github/issues/versoly/plugins
[issues-url]: https://github.com/versoly/plugins/issues
[codecov-img]: https://codecov.io/gh/versoly/plugins/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/versoly/plugins
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
