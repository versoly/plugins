import { defineConfig } from 'src/config';

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
