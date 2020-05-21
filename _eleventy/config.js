const filters = require('./filters')
const shortcodes = require('./shortcodes')

module.exports = function(eleventyConfig) {

  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  Object.keys(shortcodes).forEach(shortCodeName => {
    eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName])
  })

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('**/posts/*.md').reverse()
  })

  return {
    markdownTemplateEngine: 'njk',
  }
}
