const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, './src/lib/**/*!(*.spec).{tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
