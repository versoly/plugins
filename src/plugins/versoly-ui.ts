import { defineConfig } from '../config';

export default defineConfig({
  name: 'versoly-ui',
  cdnUrls: [
    {
      url: 'https://cdn.jsdelivr.net/npm/@floating-ui/core@1.7.4/dist/floating-ui.core.umd.min.js',
      defer: true,
    },
    {
      url: 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.4/dist/floating-ui.dom.umd.min.js',
      defer: true,
    },
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/versoly-ui/2.3.0/versoly-ui.js',
      delay: true,
    },
  ],
});
