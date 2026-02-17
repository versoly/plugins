import { defineConfig } from '../config';

const js = `window.vTailtips = [];
window.vGetElementsByToggle('tooltip').forEach((elem) => {
  const tailtip = Tailtip(elem, window.vGetElementOptions(elem));
  window.vTailtips.push(tailtip);
});`;

export default defineConfig({
  name: 'tailtip',
  checks: [{ plugin: 'tailtip' }],
  src: 'https://d1pnnwteuly8z3.cloudfront.net/libs/tailtip/1.1.0/tailtip.js',
  cdnUrls: [
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/libs/tailtip/1.1.0/tailtip.js',
      defer: true,
    },
  ],
  js,
  components: [
    {
      name: 'Info Tooltip',
      category: 'Plugins',
      html: `<span class="flex w-4 h-4 bg-dark text-white items-center justify-center rounded-full text-xs font-medium" data-toggle="tooltip">i</span>
<div class="tooltip" role="tooltip">
    <div class="tooltip-inner">
        <span>This is a tooltip that is shown when hovered or clicked.</span>
    </div>
    <div class="tooltip-arrow"></div>
</div>`,
    },
  ],
  options: {
    name: 'Tailtip Options',
    // isShown: (element) => element['data-toggle'] === 'tooltip',
    isShown: {
      props: {
        'data-toggle': 'tooltip',
      },
    },
    previewInEditor: true,
    fields: [
      {
        name: 'tailtip',
        type: 'TailtipOption',
      },
      {
        name: 'Placement',
        propsName: 'data-options.placement',
        type: 'DropdownPropOption',
        inline: true,
        noneDisplayValue: 'Default',
        options: [false, 'top', 'bottom', 'left', 'right'],
      },
    ],
  },
});
