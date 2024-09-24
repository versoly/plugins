import { defineConfig } from 'src/config';

export const finisherHeader = defineConfig({
  name: 'Finisher Header',
  cdnUrls: [
    {
      url: 'https://d1pnnwteuly8z3.cloudfront.net/js/finisher-header.es5.min.js',
      defer: true,
    },
  ],
  js: `document.querySelectorAll('.finisher-header').forEach(elem => {
  let options = window.vGetElementOptions(elem);
  new FinisherHeader(options);
});`,
  checks: [{ html: 'finisher-header' }],
  components: [
    {
      name: 'Finisher Header',
      category: 'Plugins',
      html: `<div class="finisher-header" data-toggle="finisher-header" data-options="{'count':15,'size':{'min':2,'max':40,'pulse':0},'speed':{'x':{'min':0,'max':0.8},'y':{'min':0,'max':0.2}},'colors':{'background':'#fff','particles':['#ff926b','#87ddfe','#acaaff','#1bffc2','#f9a5fe']},'blending':'screen','opacity':{'center':1,'edge':1},'skew':-1,'shapes':['c','s','t']}"></div>`,
    },
  ],
});
