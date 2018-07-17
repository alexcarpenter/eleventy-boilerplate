const CleanCSS = require('clean-css')
const UglifyJS = require('uglify-js')

module.exports = eleventyConfig => {
  // Minify and inline CSS
  eleventyConfig.addFilter(
    'cssmin',
    code => new CleanCSS({}).minify(code).styles
  )

  // Minify and inline JS
  eleventyConfig.addFilter('jsmin', code => {
    let minified = UglifyJS.minify(code)
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error)
      return code
    }
    return minified.code
  })

  return {
    templateFormats: ['njk', 'md', 'html'],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'www'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false,
    passthroughFileCopy: true
  }
}
