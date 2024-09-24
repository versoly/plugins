import { defineConfig } from 'src/config';

export const typed = defineConfig({
  name: 'Typed',
  options: {
    name: 'Typed Effect Options',
    previewInEditor: true,
    isShown: {
      props: {
        'data-toggle': 'typed',
      },
    },
    fields: [
      {
        type: 'TextOption',
        name: 'Phrases',
        tooltipProps: { content: 'Use commas to add new words/phrases' },
        placeholder: 'second phrase., third phrase.',
        propsName: 'data-options.strings',
        isArray: true,
      },
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
        name: 'Type Speed',
        type: 'SliderPropOption',
        propsName: 'data-options.typeSpeed',
        min: 10,
        max: 400,
        stepSize: 10,
        defaultValue: 100,
        enabledValue: 100,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Back Speed',
        type: 'SliderPropOption',
        propsName: 'data-options.backSpeed',
        min: 10,
        max: 400,
        stepSize: 10,
        defaultValue: 50,
        enabledValue: 50,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Start Delay',
        type: 'SliderPropOption',
        propsName: 'data-options.startDelay',
        min: 50,
        max: 3000,
        stepSize: 50,
        defaultValue: 500,
        enabledValue: 500,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
      {
        name: 'Back Delay',
        type: 'SliderPropOption',
        propsName: 'data-options.backDelay',
        min: 50,
        max: 3000,
        stepSize: 50,
        defaultValue: 1000,
        enabledValue: 1000,
        inHeaderAction: true,
        headerGroup: 'Core',
      },
    ],
  },
  cdnUrls: [
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js',
      defer: true,
    },
  ],
  js: `
window.vGetElementsByToggle('typed').forEach((elem, index) => {
  let options = window.vGetElementOptions(elem);

  options.strings = [elem.innerHTML, ...options.strings];
  elem.innerHTML = '';

  new Typed(elem, {
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 1000,
    loop: true,
    ...options
  });
});`,
  checks: [{ plugin: 'typed' }],
  components: [
    // {
    //   name: 'Tilt Div',
    //   category: 'Plugins',
    //   html: `<div class="w-full h-full" data-toggle="tilt" data-options="{'max':15,'reset':true}"></div>`,
    // },
  ],
  displayNames: [
    {
      displayName: 'Typed Effect',
      property: 'data-toggle',
      value: 'typed',
    },
  ],
});
