import { defineConfig } from '../config';

export default defineConfig({
  name: 'versoly-ui',
  cdnUrls: [
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/floating-ui-core/1.7.4/floating-ui-core.js',
      defer: true,
    },
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/floating-ui-dom/1.7.4/floating-ui-dom.js',
      defer: true,
    },
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/versoly-ui/2.3.0/versoly-ui.js',
      delay: true,
    },
  ],
});
