const rootMain = require('../../../.storybook/main');
const { webpackPreview } = require('./utils');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  staticDirs: ['./static'],
  stories: [...rootMain.stories, '../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed
    webpackPreview(config);

    return config;
  },
};
