import { defineConfig } from 'src/config';

const js = `window.vGetElementsByToggle('countdown').forEach(e => {
  const deadline = new Date(e.dataset.countdown).getTime();

  const daysEl = e.querySelector('[data-countdown-type="days"]'),
    hoursEl = e.querySelector('[data-countdown-type="hours"]'),
    minutesEl = e.querySelector('[data-countdown-type="minutes"]'),
    secondsEl = e.querySelector('[data-countdown-type="seconds"]');

  const countdownFunc = () => {
    const now = new Date().getTime();
    let t = deadline - now;

    if (t < 0) {
      clearInterval(x);
      t = 0;
    }

    let seconds = ''+Math.floor((t / 1000) % 60),
      minutes = ''+Math.floor((t / 1000 / 60) % 60),
      hours = ''+Math.floor((t / (1000 * 60 * 60)) % 24),
      days = ''+Math.floor(t / (1000 * 60 * 60 * 24));

    if (seconds.length === 1) seconds = '0' + seconds;
    if (minutes.length === 1) minutes = '0' + minutes;
    if (hours.length === 1) hours = '0' + hours;
    if (days.length === 1) days = '0' + days;

    if (secondsEl) secondsEl.innerHTML = seconds;
    if (minutesEl) minutesEl.innerHTML = minutes;
    if (hoursEl) hoursEl.innerHTML = hours;
    if (daysEl) daysEl.innerHTML = days;
  }

  var x = setInterval(countdownFunc, 1000);
  countdownFunc();
})
`;

const currentDate = new Date();
const ISODateIn5Days = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1234).toISOString();

export const countdown = defineConfig({
  name: 'Countdown Options',
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
