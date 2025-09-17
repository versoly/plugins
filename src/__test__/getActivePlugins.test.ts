import { expect, test } from 'vitest';
import { getActivePlugins, getFilteredPlugins } from '../../src/getActivePlugins';

const tests = [
  {
    testName: 'blank string',
    HTML: '',
    expectedActive: [],
    expectedFiltered: ['versoly-ui'],
  },
  {
    testName: 'data-toggle="modal"',
    HTML: `<div data-toggle="modal"></div>`,
    expectedActive: ['modal'],
    expectedFiltered: ['versoly-ui', 'versoly-modal'],
  },
  {
    testName: 'multiple',
    HTML: `<div data-toggle="modal"></div><div data-toggle="swiper"></div>`,
    expectedActive: ['modal', 'swiper'],
    expectedFiltered: ['swiper', 'versoly-ui', 'versoly-modal'],
  },
  {
    testName: 'data-',
    HTML: `<div data-toggle="modal"></div><div data-wow data-taos-offset="v"></div> <div data-aos="" data-nice></div>`,
    expectedActive: ['modal', 'wow', 'taos', 'aos', 'nice'],
    expectedFiltered: ['taos', 'versoly-ui', 'versoly-modal'],
  },
];

test.each(tests)('getActivePlugins; $testName', ({ HTML, expectedActive }) => {
  expect(getActivePlugins(HTML)).toStrictEqual(expectedActive);
});

test.each(tests)('getFilteredPlugins; $testName', ({ HTML, expectedFiltered }) => {
  expect(getFilteredPlugins({ HTML }).map((p) => p.name)).toStrictEqual(expectedFiltered);
});
