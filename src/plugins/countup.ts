import { defineConfig } from '../config';

export default defineConfig({
  name: 'countup',
  cdnUrls: [
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/countup/2.9.0/countup.js',
    },
  ],
  js: `window.vGetElementsByToggle('countup').forEach(elem => {
  var startVal = elem.dataset.from ? +elem.dataset.from : 0
    ,endVal = elem.dataset.to ? +elem.dataset.to : 0
    ,duration = elem.dataset.duration ? +elem.dataset.duration : 2
    ,options = window.vGetElementOptions(elem);
  const up = new countUp.CountUp(elem, endVal, { enableScrollSpy: true, scrollSpyOnce: true, ...options, startVal, duration });
  up.start();
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
        propsName: 'data-options.enableScrollSpy',
        type: 'BooleanPropOption',
        options: [false, true],
        defaultValue: true,
      },
      {
        name: 'Animate only once',
        propsName: 'data-options.scrollSpyOnce',
        type: 'BooleanPropOption',
        options: [false, true],
        defaultValue: true,
      },
    ],
  },
  components: [
    {
      name: 'Countup',
      category: 'Plugins',
      html: `<h2 data-toggle="countup" data-from="100" data-to="800">100</h2>`,
    },
  ],
});
