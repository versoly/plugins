import { defineConfig } from 'src/config';

export const prism = defineConfig({
  name: 'Prism',
  cdnUrls: [
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/line-numbers/prism-line-numbers.min.css',
    },
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js',
    },
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/autoloader/prism-autoloader.min.js',
    },
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/line-numbers/prism-line-numbers.min.js',
    },
  ],
  js: `
document.querySelectorAll("pre > code[class^='language-']").forEach((elem) => {
  elem.parentNode.innerHTML = elem.parentNode.innerHTML.trim();
});

let themeLink = window.vPrismTheme !== undefined ? window.vPrismTheme : 'default';

if (themeLink === 'default') {
  themeLink = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css';
} else if (themeLink && !themeLink.includes('https://')) {
  themeLink = 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-' + themeLink + '.min.css';
}

if (themeLink && themeLink.includes('https://')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = themeLink;
  document.head.appendChild(link);
}

window.addEventListener('load', () => {
  window.Prism && window.Prism.highlightAll();
});`,
  checks: [{ html: 'prism' }],
});
