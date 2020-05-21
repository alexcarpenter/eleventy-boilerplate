const CleanCSS = require('clean-css');
const htmlmin = require('html-minifier');
const Terser = require('terser');

module.exports = {
  cssmin: code => {
    if (process.env.ELEVENTY_PRODUCTION) {
      return new CleanCSS({}).minify(code).styles;
    }
    return code;
  },

  htmlmin: (content, outputPath) => {
    if (process.env.ELEVENTY_PRODUCTION && outputPath.indexOf('.html') > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  },

  jsmin: code => {
    if (process.env.ELEVENTY_PRODUCTION) {
      let minified = Terser.minify(code);
      if (minified.error) {
        console.log('Terser error: ', minified.error);
        return code;
      }
      return minified.code;
    }
    return code;
  },
};
