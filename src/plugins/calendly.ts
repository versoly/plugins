import { defineConfig } from 'src/config';

export default defineConfig({
  name: 'calendly',
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
document.querySelectorAll('[data-calendly-url]').forEach(elem => {
  const url = elem.dataset.calendlyUrl;

  if (!url) {
    return;
  }

  elem.addEventListener('click', e => {
    e.preventDefault();
    window.Calendly.initPopupWidget({ url, parentElement: elem });
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
