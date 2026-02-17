import calendly from './calendly';
import swiper from './swiper';
import prism from './prism';
import tilt from './tilt';
import typed from './typed';
import countup from './countup';
import countdown from './countdown';
import finisherHeader from './finisher-header';
import headroom from './headroom';
import taos from './taos';
import tailtip from './tailtip';
import versolyMarquee from './versoly-marquee';
import versolyUI from './versoly-ui';
import versolyAnalytics from './versoly-analytics';
import versolyEvents from './versoly-events';
import versolyForm from './versoly-form';
import versolyModal from './versoly-modal';
import versolyPricing from './versoly-pricing';

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
  headroom,
  // versoly packages
  taos,
  tailtip,
  'versoly-marquee': versolyMarquee,
  'versoly-ui': versolyUI,
  'versoly-pricing': versolyPricing,
  // internal
  'versoly-analytics': versolyAnalytics,
  'versoly-events': versolyEvents,
  'versoly-form': versolyForm,
  'versoly-modal': versolyModal,
};
