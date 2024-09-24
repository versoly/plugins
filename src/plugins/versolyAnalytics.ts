import { defineConfig } from 'src/config';

const js = `!function(e){e.versoly.event=function(t){if(!("visibilityState"in document&&"prerender"===document.visibilityState||/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)||e._phantom||e.__nightmare||e.navigator.webdriver||e.Cypress||""===e.location.host)){var n=new XMLHttpRequest;n.open("POST",e.versoly.url,!0),n.setRequestHeader("Content-Type","application/json; charset=UTF-8"),n.send(JSON.stringify({siteId:e.versoly.id,referrer:document.referrer,paramReferrer:"",hostname:e.location.hostname,pathname:e.location.pathname+e.location.search,width:e.innerWidth,height:e.innerHeight,tz:Intl.DateTimeFormat().resolvedOptions().timeZone,...t}))}}}(window),window.versoly.event({name: 'pageview'});`;

export const versolyAnalytics = defineConfig({
  name: 'Versoly Analytics',
  js,
  checks: [{ html: '/api/event' }],
});
