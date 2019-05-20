const CleanCSS = require('clean-css')
const UglifyJS = require('uglify-js')

module.exports = {
  cssmin: function(code) {
    return new CleanCSS({}).minify(code).styles
  },

  jsmin: function(code) {
    let minified = UglifyJS.minify(code)
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error)
      return code
    }
    return minified.code
  }
}
