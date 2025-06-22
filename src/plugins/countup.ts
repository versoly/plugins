import { defineConfig } from 'src/config';

export default defineConfig({
  name: 'countup',
  cdnUrls: [
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.4.0/scrollreveal.min.js',
    },
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.8/countUp.umd.min.js',
    },
  ],
  js: `window.scrollReveal = ScrollReveal();

window.countUpStart = (elem) => {
  var startVal = elem.dataset.from ? +elem.dataset.from : 0
    ,endVal = elem.dataset.to ? +elem.dataset.to : 0
    ,duration = elem.dataset.duration ? +elem.dataset.duration : 2
    ,options = window.vGetElementOptions(elem);
  const up = new countUp.CountUp(elem, endVal, {...options, startVal, duration});
  up.start();
}

window.vGetElementsByToggle('countup').forEach(elem => {
  scrollReveal.reveal(elem, {beforeReveal: window.countUpStart, duration: 0});
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
