const fsPromise = require('node:fs/promises');

const pprint = (value) =>
  JSON.stringify(
    value,
    (_, value) => {
      if (value instanceof RegExp) return value.toString();
      return value;
    },
    2
  );

/**
 *
 * @param {*} webpackConfig
 */
const webpackPreview = (webpackConfig) => {
  fsPromise.writeFile(require('path').join(__dirname, 'webpack.preview.js'), `module.exports = ${pprint(webpackConfig)}`, {
    encoding: 'utf8',
  });
};

module.exports = {
  pprint,
  webpackPreview,
};
