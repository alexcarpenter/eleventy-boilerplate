module.exports = {
  video: function(id) {
    return `<div style="--aspect-ratio: 16/9;">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>`
  },

  figure: function({ filename, alt = '', caption = '', ratio = '16/9' }) {
    return `<figure>
              <div style="--aspect-ratio: ${ratio};">
                <img src="/assets/images/${filename}" alt="${alt ? alt : ''}" />
              </div>
              ${caption ? `<figcaption>${caption}</figcaption>` : ''}
            </figure>`
  }
}
