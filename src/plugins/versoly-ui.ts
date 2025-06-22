import { defineConfig } from 'src/config';

export default defineConfig({
  name: 'versoly-ui',
  cdnUrls: [
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/floating-ui/1.0.1/floating-ui.min.js',
      defer: true,
    },
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/versoly-ui/2.1.1/versoly-ui.js',
      delay: true,
    },
  ],
});
