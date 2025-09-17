import { VersolyPluginConfig } from 'src/types';
import { plugins } from './plugins/index';

export const getActivePlugins = (HTML: string) => {
  let activePlugins: string[] = [];

  const pluginRegex = /data-toggle="([^"]+)"/g;
  let match = pluginRegex.exec(HTML);

  while (match != null) {
    activePlugins.push(match[1]);
    match = pluginRegex.exec(HTML);
  }

  // ([^"]+)"
  const dataRegex = /data-([^=> ]+)/g;
  match = dataRegex.exec(HTML);

  while (match != null) {
    activePlugins.push(match[1]);
    match = dataRegex.exec(HTML);
  }

  activePlugins = activePlugins.filter((p) => p !== 'toggle').map((p) => (p.includes('taos') ? 'taos' : p));

  if (!activePlugins.includes('taos') && HTML.includes('taos:')) {
    activePlugins.push('taos');
  }

  activePlugins = activePlugins.map((p) => {
    if (p === 'tooltip') {
      return 'tailtip';
    }

    if (p.includes('calendly')) {
      return 'calendly';
    }

    if (p.includes('marquee')) {
      // return 'versoly-marquee';
    }

    return p;
  });

  return [...new Set(activePlugins)];
};

export const getFilteredPlugins = ({
  HTML,
  allPlugins = plugins,
  activePlugins,
}: {
  HTML: string;
  allPlugins?: Record<string, VersolyPluginConfig>;
  activePlugins?: string[];
}): VersolyPluginConfig[] => {
  if (!activePlugins) {
    activePlugins = getActivePlugins(HTML);
  }

  return Object.values(allPlugins).filter((p) => {
    const { checks } = p;

    if (checks) {
      let orChecks = checks.some((check) => {
        if ('html' in check && check.html) {
          return HTML.includes(check.html);
        }

        if ('plugin' in check && check.plugin) {
          return activePlugins.includes(check.plugin);
        }

        return false;
      });

      if (!orChecks) {
        return false;
      }
    }

    return true;
  });
};
