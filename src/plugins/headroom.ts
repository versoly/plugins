import { defineConfig } from 'src/config';

export default defineConfig({
  name: 'headroom',
  cdnUrls: [
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/headroom.min.js',
      inline: false,
      defer: true,
    },
  ],
  js: `window.vGetElementsByToggle('headroom').forEach((elem) => {
  let options = window.vGetElementOptions(elem);

  var headroom  = new Headroom(elem, {
    classes: {
      pinned: "d-block block",
      unpinned: 'd-none hidden'
    },
    ...options
  });

  headroom.init();
});`,
  checks: [{ plugin: 'headroom' }],
  components: [],
});
