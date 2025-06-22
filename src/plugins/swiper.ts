import { defineConfig } from 'src/config';

const js = `
window.vSwipers = [];
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
  cdnUrls: [
    {
      url: `https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.3.2/swiper-bundle.min.js`,
      inline: false,
      defer: true,
    },
    {
      url: `https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.3.2/swiper-bundle.min.css`,
    },
  ],
  js,
  checks: [{ plugin: 'swiper' }],
});
