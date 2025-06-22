import { defineConfig } from 'src/config';

const js = `window.vGetElementsByToggle('countdown').forEach(elem => {
  const deadline = new Date(elem.dataset.countdown).getTime();

  let elementsByType = {};
  elem.querySelectorAll('[data-countdown-type]').forEach(el => {
    elementsByType[el.dataset.countdownType] = el;
  });

  const countdownFunc = () => {
    let t = (deadline - new Date().getTime()) / 1000;

    if (t < 0) {
      clearInterval(x);
      t = 0;
    }

    let valuesByType = {
      seconds: t % 60,
      minutes: (t / 60) % 60,
      hours: (t / (60 * 60)) % 24,
      days: t / (60 * 60 * 24),
    };

    Object.keys(valuesByType).forEach(type => {
      if (elementsByType[type]) {
        let value = Math.floor(valuesByType[type]);
        if (value < 10) {
          value = '0' + value;
        }

        elementsByType[type].innerHTML = value;
      }
    });
  }

  var x = setInterval(countdownFunc, 1000);
  countdownFunc();
});
`;

const currentDate = new Date();
const ISODateIn5Days = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1234).toISOString();

export default defineConfig({
  name: 'countdown',
  js,
  checks: [{ plugin: 'countdown' }],
  options: {
    name: 'Countdown',
    isShown: {
      props: {
        'data-toggle': 'countdown',
        'data-countdown': true,
      },
    },
    fields: [
      {
        name: 'Countdown Timer',
        propsName: 'data-countdown',
        type: 'DateTimePickerOption',
      },
    ],
  },
  components: [
    {
      name: 'Countdown',
      category: 'Plugins',
      html: `<h2 class="font-semibold" data-toggle="countdown" data-countdown="${ISODateIn5Days}">
  <span data-countdown-type="days">4</span>
  <span class="opacity-20">:</span>
  <span data-countdown-type="hours">1</span>
  <span class="opacity-20">:</span>
  <span data-countdown-type="minutes">0</span>
  <span class="opacity-20">:</span>
  <span data-countdown-type="seconds">0</span>
</h2>`,
    },
  ],
});
