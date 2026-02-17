import { defineConfig } from '../config';

const js = `
document.querySelectorAll("pre > code[class^='language-']").forEach((elem) => {
  elem.parentNode.innerHTML = elem.parentNode.innerHTML.trim();
});

let themeLink = window.vPrismTheme !== undefined ? window.vPrismTheme : 'default';

if (themeLink === 'default') {
  themeLink = 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism.min.css';
} else if (themeLink && !themeLink.includes('https://')) {
  themeLink = 'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-' + themeLink + '.min.css';
}

if (themeLink && themeLink.includes('https://')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = themeLink;
  document.head.appendChild(link);
}

window.addEventListener('load', () => {
  window.Prism && window.Prism.highlightAll();
});`;

export default defineConfig({
  name: 'prism',
  checks: [{ html: 'prism' }],
  cdnUrls: [
    {
      url: 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-core.min.js',
    },
    {
      url: 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/autoloader/prism-autoloader.min.js',
    },
    {
      url: 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/line-numbers/prism-line-numbers.min.js',
    },
    {
      url: 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/line-numbers/prism-line-numbers.min.css',
    },
  ],
  js,
});
