import { defineConfig } from '../config';

const src = 'https://d1pnnwteuly8z3.cloudfront.net/libs/versoly-marquee/1.1.1/versoly-marquee.js';

const js = `window.vMarquees = [];
window.vGetElementsByToggle('marquee').forEach((elem) => {
  const marquee = new Marquee(elem, window.vGetElementOptions(elem));
  window.vMarquees.push(marquee);
});`;

export default defineConfig({
  name: 'versoly-marquee',
  checks: [{ plugin: 'marquee' }],
  js,
  options: {
    name: 'Marquee',
    previewInEditor: true,
    isShown: {
      props: {
        'data-toggle': 'marquee',
      },
    },
    fields: [
      {
        name: 'Loop',
        type: 'BooleanPropOption',
        propsName: 'data-options.loop',
        defaultValue: true,
        enabledValue: true,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Duration',
        type: 'SliderPropOption',
        propsName: 'data-options.duration',
        min: 1,
        max: 40,
        stepSize: 1,
        defaultValue: 5,
      },
      {
        name: 'Direction',
        type: 'IconButtonOption',
        propsName: 'data-options.direction',
        options: ['ltr', 'rtl', 'ttb', 'btt'],
        defaultValue: 'ltr',
      },
      {
        name: 'Pauseable',
        type: 'BooleanPropOption',
        propsName: 'data-options.pauseable',
        defaultValue: true,
      },
      {
        name: 'Iterations',
        type: 'SliderPropOption',
        propsName: 'data-options.iterations',
        min: 1,
        max: 5,
        stepSize: 1,
        defaultValue: 1,
        enabledValue: 1,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
    ],
  },
  src,
  cdnUrls: [
    {
      url: src,
      defer: true,
    },
  ],
  displayNames: [
    {
      displayName: 'Marquee',
      property: 'data-toggle',
      value: 'marquee',
    },
  ],
});
