// export const plugins = {
//   // external
//   calendly: require('./calendly'),
//   swiper: require('./swiper'),
//   prism: require('./prism'),
//   tilt: require('./tilt'),
//   typed: require('./typed'),
//   countup: require('./countup'),
//   countdown: require('./countdown'),
//   'finisher-header': require('./finisher-header'),
//   taos: require('./taos'),
//   tailtip: require('./tailtip'),
//   // versoly packages
//   'versoly-marquee': require('./versoly-marquee'),
//   'versoly-ui': require('./versoly-ui'),
//   // internal
//   'versoly-analytics': require('./versoly-analytics'),
//   'versoly-events': require('./versoly-events'),
//   'versoly-form': require('./versoly-form'),
//   'versoly-modal': require('./versoly-modal'),
// };

import calendly from './calendly';
import swiper from './swiper';
import prism from './prism';
import tilt from './tilt';
import typed from './typed';
import countup from './countup';
import countdown from './countdown';
import finisherHeader from './finisher-header';
import taos from './taos';
import tailtip from './tailtip';
import versolyMarquee from './versoly-marquee';
import versolyUI from './versoly-ui';
import versolyAnalytics from './versoly-analytics';
import versolyEvents from './versoly-events';
import versolyForm from './versoly-form';
import versolyModal from './versoly-modal';

export const plugins = {
  // external
  calendly,
  swiper,
  prism,
  tilt,
  typed,
  countup,
  countdown,
  'finisher-header': finisherHeader,
  taos,
  tailtip,
  // versoly packages
  'versoly-marquee': versolyMarquee,
  'versoly-ui': versolyUI,
  // internal
  'versoly-analytics': versolyAnalytics,
  'versoly-events': versolyEvents,
  'versoly-form': versolyForm,
  'versoly-modal': versolyModal,
};
