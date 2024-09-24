import { defineConfig } from 'src/config';

export const modal = defineConfig({
  name: 'Versoly UI Modal',
  js: `window.vGetElementsByToggle('modal').forEach(elem => {
  let options = window.vGetElementOptions(elem);

  if (options.globalBlockId && window.vComponents[options.globalBlockId]) {
    elem.dataset.html = window.vComponents[options.globalBlockId];

    if (window.vComponents[options.globalBlockId].includes('data-formid')) {
      options.beforeShown = 'addFormListener'
    }
  }

  elem.dataset.options = JSON.stringify(options);
});`,
  checks: [{ plugin: 'modal' }],
});
