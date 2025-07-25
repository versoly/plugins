import { defineConfig } from 'src/config';

const js = `document.querySelectorAll('section:has([id$="-pricing-button"], [data-toggle="pricing"])').forEach(section => {
  const durationButtons = section.querySelectorAll('[id$="-pricing-button"]');
  const durations = [...durationButtons].map(b => b.id.replace('-pricing-button', ''));

  const activeClass = durationButtons[0] && durationButtons[0].className;
  const inactiveClass = durationButtons[1] && durationButtons[1].className;

  durations.forEach(duration => {
    const durationButton = section.querySelector('[id="' + duration + '-pricing-button"]');

    if (!durationButton) {
      return;
    }

    durationButton.addEventListener('click', function() {
      section.querySelectorAll('[data-' + duration + ']').forEach((element) => {
        element.innerHTML = element.dataset[duration];
      })

      section.querySelectorAll('[data-duration-show]').forEach(d => {
        d.className = (d.className || '') + ' hidden';
      })

      section.querySelectorAll('[data-duration-show="' + duration + '"]').forEach(d => {
        d.className = (d.className || '').split(' ').filter(c => c !== 'hidden').join(' ');
      })

      durationButtons.forEach(b => b.className = inactiveClass);
      durationButton.className = activeClass;
    });
  });

  const toggles = section.querySelectorAll('.pricing-toggle, [data-toggle="pricing"]');
  toggles.forEach(toggleElem => {
    toggleElem.addEventListener('click', function (e) {
      if (e.target.tagName !== 'INPUT') {
        return;
      }

      toggles.forEach(t => {
        t.getElementsByTagName('input')[0].checked = !!e.target.checked
      });

      const sectionDurations = ['monthly', 'annual'];
      let nextDuration = sectionDurations[0];

      sectionDurations.forEach(d => {
        section.querySelectorAll('[data-' + d + ']').forEach(elem => {
          if (elem.innerHTML !== elem.getAttribute('data-' + d)) {
            nextDuration = d
          }
        })
      });

      section.querySelectorAll('[' + 'data-' + nextDuration + ']').forEach(elem =>
        elem.innerHTML = elem.getAttribute('data-' + nextDuration)
      )

      section.querySelectorAll('[data-duration-show]').forEach(d => {
        d.className = (d.className || '') + ' hidden'
      })

      section.querySelectorAll('[data-duration-show="' + nextDuration + '"]').forEach(d => {
        d.className = (d.className || '').split(' ').filter(c => c !== 'hidden').join(' ')
      })
    })
  });
});`;

export default defineConfig({
  name: 'versoly-pricing',
  js,
  checks: [{ plugin: 'pricing' }, { html: 'pricing-toggle' }, { html: '-pricing-button' }],
});
