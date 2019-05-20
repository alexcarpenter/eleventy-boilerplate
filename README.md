# eleventy-boilerplate

> An opinionated boilerplate for new projects built with Eleventy.

## What's included

- This project uses [Eleventy](https://www.11ty.io/) as a static site generator.
- Templating uses [Nunjucks](https://mozilla.github.io/nunjucks/).
  - Reusable components are built using [shortcodes](https://www.11ty.io/docs/shortcodes/).
- Styles are written in vanilla CSS and inlined for performance. (Note: it is your responsibility to autoprefix the CSS as needed).
  - The main CSS file can be found at `_includes/app.css`.
- Javascript is minified and inlined for performance. (Note: write browser compatible JS).
  - The main JS file can be found at `_includes/app.js`.

## Installation

```
$ git clone git@github.com:alexcarpenter/eleventy-boilerplate.git
$ cd eleventy-boilerplate
$ npm install
```

## Commands

| Command         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `npm start`     | Start a development server and watch for updates             |
| `npm run build` | Build templates, data, CSS, and JS for production envrioment |

## License

MIT
