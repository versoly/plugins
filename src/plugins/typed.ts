import { defineConfig } from '../config';

const js = `
window.vGetElementsByToggle('typed').forEach((elem) => {
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
});`;

export default defineConfig({
  name: 'typed',
  checks: [{ plugin: 'typed' }],
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
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/typed/2.1.0/typed.js',
      defer: true,
    },
  ],
  js,
  components: [
    //     {
    //       name: 'Typed Header 1',
    //       category: 'Plugins',
    //       html: `<h1 class="display-4 font-semibold mb-6">Explain your product and its <span class="text-primary block"><span class="inline-block" data-toggle="typed" data-options="{'loop':true,'strings':['best feature.', 'easy feature.']}">main benefit.</span></span>
    // </h1>`,
    //     },
  ],
  displayNames: [
    {
      displayName: 'Typed Effect',
      property: 'data-toggle',
      value: 'typed',
    },
  ],
});
