import { defineConfig } from '../config';

const js = `window.vSwipers = [];
window.vGetElementsByToggle('swiper').forEach((elem) => {
  let props = window.vGetElementOptions(elem);

  if (props.pagination && props.pagination.renderBullet === 'number') {
    props.pagination.renderBullet = function(index, className) {
      const span = document.createElement('span');
      span.className = className;
      span.textContent = index + 1;
      return span.outerHTML;
    }
  }

  window.vSwipers.push(new Swiper(elem, props));
});`;

export default defineConfig({
  name: 'swiper',
  checks: [{ plugin: 'swiper' }],
  cdnUrls: [
    {
      url: `https://d1pnnwteuly8z3.cloudfront.net/libs/swiper/9.3.2/swiper.js`,
      inline: false,
      defer: true,
    },
    {
      // requires custom adding layer to css for Tailwind v4
      url: `https://d1pnnwteuly8z3.cloudfront.net/libs/swiper/9.3.2/swiper.css`,
    },
  ],
  js,
});
