import { defineConfig } from 'src/config';

export const eventAnalytics = defineConfig({
  name: 'Event Analytics',
  js: `const eventElements = document.querySelectorAll('[data-eventid]');
for (const eventElement of eventElements) {
  if (eventElement.tagName !== 'FORM') {
    eventElement.addEventListener('click', function(e) {
      const eventName = eventElement.getAttribute('data-eventid');

      if (window.versoly) {
        window.versoly.event({name: eventName})
      }
      if (window.gtag) {
        window.gtag('event', eventName)
      }
      if (window.amplitude) {
        window.amplitude.getInstance().logEvent(event);
      }
    })
  }
}`,
  checks: [{ html: 'data-eventid' }],
});
