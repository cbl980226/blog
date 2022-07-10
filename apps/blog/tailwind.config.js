const path = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(
      __dirname,
      '{app,pages}/**/*!(*.stories|*.spec).{ts,tsx,js,jsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
