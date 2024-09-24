import { defineConfig } from 'src/config';

export const countup = defineConfig({
  name: 'Countup',
  cdnUrls: [
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.4.0/scrollreveal.min.js',
    },
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.8/countUp.umd.min.js',
    },
  ],
  js: `window.scrollReveal = ScrollReveal();

window.countStart = e => {
  var startVal = e.dataset.from ? +e.dataset.from : 0
    ,endVal = e.dataset.to ? +e.dataset.to : 0
    ,duration = e.dataset.duration ? +e.dataset.duration : 2
    ,options = e.dataset.options ? JSON.parse(e.dataset.options) : {}
  const up = new countUp.CountUp(e, endVal, {...options, startVal, duration});
  up.start()
}

window.vGetElementsByToggle('countup').forEach(e => {
    scrollReveal.reveal(e, {beforeReveal: window.countStart, duration: 0});
});`,
  checks: [{ plugin: 'countup' }],
  options: {
    name: 'Countup Options',
    isShown: {
      props: {
        'data-toggle': 'countup',
      },
    },
    fields: [
      {
        name: 'Count From',
        propsName: 'data-from',
        type: 'NumberOption',
      },
      {
        name: 'Count To',
        propsName: 'data-to',
        type: 'NumberOption',
      },
      {
        name: 'Duration',
        propsName: 'data-duration',
        type: 'NumberOption',
        placeholder: '2',
        stepSize: 0.1,
      },
      {
        name: 'Countup when Visible',
        propsName: 'data-aos',
        options: [false, true],
        type: 'BooleanPropOption',
        defaultValue: false,
      },
    ],
  },
  components: [
    {
      name: 'Countup',
      category: 'Plugins',
      html: `<h2 data-toggle="countup" data-aos data-aos-id="countup:in" data-from="100" data-to="800">100</h2>`,
    },
  ],
});
