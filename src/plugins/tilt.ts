import { defineConfig } from 'src/config';

const js = `window.vTilts = [];
window.vGetElementsByToggle('tilt').forEach((tiltEle, index) => {
  const options = window.vGetElementOptions(elem);
  VanillaTilt.init(tiltEle, options)
  tiltEle.setAttribute('data-tilt-index', index);
  window.vTilts.push(tiltEle);
});`;

export const tilt = defineConfig({
  name: 'Tilt',
  options: {
    name: 'Tilt',
    previewInEditor: true,
    isShown: {
      props: {
        'data-toggle': 'tilt',
      },
    },
    fields: [
      {
        name: 'Speed',
        type: 'SliderPropOption',
        propsName: 'data-options.speed',
        min: 0,
        max: 3000,
        stepSize: 100,
        defaultValue: 300,
      },
      {
        name: 'Max Tilt',
        type: 'SliderPropOption',
        propsName: 'data-options.max',
        min: 0,
        max: 180,
        stepSize: 1,
        defaultValue: 35,
      },
      {
        name: 'Reverse',
        type: 'BooleanPropOption',
        propsName: 'data-options.reverse',
        defaultValue: false,
        enabledValue: true,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Transition',
        type: 'BooleanPropOption',
        propsName: 'data-options.transition',
        defaultValue: true,
        enabledValue: false,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        label: 'Easing',
        name: 'Easing',
        propsName: 'data-options.easing',
        type: 'TextOption',
        defaultValue: 'cubic-bezier(.03,.98,.52,.99)',
        enabledValue: 'cubic-bezier(.03,.98,.52,.99)',
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Full Page Listening',
        type: 'BooleanPropOption',
        propsName: 'data-options.full-page-listening',
        defaultValue: false,
        enabledValue: true,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Start X',
        type: 'SliderPropOption',
        propsName: 'data-options.startX',
        min: 0,
        max: 180,
        stepSize: 1,
        defaultValue: 0,
        enabledValue: 15,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Start Y',
        type: 'SliderPropOption',
        propsName: 'data-options.startY',
        min: 0,
        max: 180,
        stepSize: 1,
        defaultValue: 0,
        enabledValue: 15,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Perspective',
        type: 'SliderPropOption',
        propsName: 'data-options.perspective',
        min: 0,
        max: 3000,
        stepSize: 1,
        defaultValue: 1000,
        enabledValue: 1000,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Scale',
        type: 'SliderPropOption',
        propsName: 'data-options.scale',
        min: 0.5,
        max: 3,
        stepSize: 0.1,
        defaultValue: 1,
        enabledValue: 1.5,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Axis',
        type: 'IconButtonOption',
        propsName: 'data-options.axis',
        options: ['x', 'y'],
        defaultValue: null,
        enabledValue: 'x',
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Glare',
        type: 'BooleanPropOption',
        propsName: 'data-options.glare',
        defaultValue: false,
        enabledValue: true,
        inHeaderAction: true,
        headerGroup: 'Glare',
      },
      {
        name: 'Max Glare',
        type: 'SliderPropOption',
        propsName: 'data-options.max-glare',
        min: 0.1,
        max: 1,
        stepSize: 0.1,
        defaultValue: 1,
        enabledValue: 0.5,
        inHeaderAction: true,
        headerGroup: 'Glare',
      },
      {
        name: 'Reset',
        type: 'BooleanPropOption',
        propsName: 'data-options.reset',
        defaultValue: true,
        enabledValue: true,
        inHeaderAction: true,
        headerGroup: 'Reset',
      },
      {
        name: 'Reset To Start',
        type: 'BooleanPropOption',
        propsName: 'data-options.reset-to-start',
        defaultValue: true,
        enabledValue: true,
        inHeaderAction: true,
        headerGroup: 'Reset',
      },
    ],
  },
  cdnUrls: [
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.js',
      defer: true,
    },
  ],
  js,
  checks: [{ plugin: 'tilt' }],
  components: [
    {
      name: 'Tilt Image',
      category: 'Plugins',
      html: `<img class="w-96" src="https://dummyimage.com/1000x600/edf2f7/0f1631&text=Placeholder" data-toggle="tilt" data-options="{'max':15,'reset':true}" />`,
    },
    {
      name: 'Tilt Div',
      category: 'Plugins',
      html: `<div class="w-full h-full" data-toggle="tilt" data-options="{'max':15,'reset':true}"></div>`,
    },
  ],
});

// add later
//   "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
//                                   // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
// broke https://github.com/micku7zu/vanilla-tilt.js/issues/87
//   "mouse-event-element":  null,   // css-selector or link to HTML-element what will be listen mouse events
//   gyroscope:              true,   // Boolean to enable/disable device orientation detection,
//   gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
//   gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
//   gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
//   gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
// }
