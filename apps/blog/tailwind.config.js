const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{app,pages}/**/*!(*.stories|*.spec).{ts,tsx,js,jsx,html}'),
    join(__dirname, '../../node_modules/flowbite-react/**/!(*.stories|*.spec).{ts,tsx,js,jsx,html}'),
    ...createGlobPatternsForDependencies(__dirname, '/**/!(*.stories|*.spec).{ts,tsx,js,jsx,html}'),
  ],

  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
