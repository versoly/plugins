import { defineConfig } from 'src/config';

// todo marquee can be dyanmic and take breakpoints SWIPER_BREAKPOINTS

// url: 'https://versoly.s3.amazonaws.com/libs/versoly-marquee/0.0.1/versoly-marquee.iife.js?hash=2',
const src = 'https://d1pnnwteuly8z3.cloudfront.net/libs/versoly-marquee/0.0.2/versoly-marquee.iife.js';

export const marquee = defineConfig({
  name: 'Marquee',
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
        max: 20,
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
  checks: [{ plugin: 'marquee' }],
  src,
  cdnUrls: [
    {
      url: src,
      defer: true,
    },
  ],
  js: `window.vMarquees = [];
window.vGetElementsByToggle('marquee').forEach((elem, index) => {
  const options = window.vGetElementOptions(elem);
  const marquee = new Marquee(elem, options);
  elem.setAttribute('data-marquee-index', index);
  window.vMarquees.push(elem);
});`,
  displayNames: [
    {
      displayName: 'Marquee',
      property: 'data-toggle',
      value: 'marquee',
    },
  ],
});
