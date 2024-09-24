import { VersolyPluginConfig } from './types';

export const defineConfig = <T extends VersolyPluginConfig>(config: T): T => {
  return config;
};
