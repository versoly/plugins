import { defineConfig } from '../config';

export default defineConfig({
  name: 'headroom',
  cdnUrls: [
    {
      url: 'https://cdn.jsdelivr.net/npm/headroom.js@0.12.0/dist/headroom.min.js',
      inline: false,
      defer: true,
    },
  ],
  js: `window.vGetElementsByToggle('headroom').forEach((elem) => {
  let options = window.vGetElementOptions(elem);

  var headroom  = new Headroom(elem, {
    classes: {
      initial : "headroom transition-transform duration-200",
      pinned: "d-block translate-y-0",
      unpinned: 'd-none -translate-y-full',
    },
    ...options
  });

  headroom.init();
});`,
  checks: [{ plugin: 'headroom' }],
  components: [],
});
