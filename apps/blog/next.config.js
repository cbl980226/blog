const withNx = require('@nrwl/next/plugins/with-nx');
const withTm = require('next-transpile-modules')([
  '@ephox/katamari',
  '@ephox/dispute',
]);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withTm(withNx(nextConfig));
