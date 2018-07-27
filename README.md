# eleventy-boilerplate

> An opinionated boilerplate for new projects built with Eleventy.

## What's included

- This project uses [Eleventy](https://www.11ty.io/) as a static site generator.
- Templating uses [Nunjucks](https://mozilla.github.io/nunjucks/).
  - Reusable components are built using [macros](https://mozilla.github.io/nunjucks/templating.html#macro).
  - An example card component can be found at `src/_includes/components/card.njk`.
- Styles are written in vanilla CSS and inlined for performance. (Note: it is your responsibility to autoprefix the CSS as needed).
  - The main CSS file can be found at `src/_includes/assets/app.css`.
- Javascript is minified and inlined for performance. (Note: write browser compatible JS).
  - The main JS file can be found at `src/_includes/assets/app.js`.

## Installation

```
$ git clone git@github.com:alexcarpenter/eleventy-boilerplate.git
$ cd eleventy-boilerplate
$ npm install
```

## Commands

| Command         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `npm run serve` | Start a development server and watch for updates             |
| `npm run build` | Build templates, data, CSS, and JS for production envrioment |

## Sites built from eleventy-boilerplate

- [alexcarpenter.me](https://alexcarpenter.me) - [Source Code](https://github.com/alexcarpenter/alexcarpenter.me)
- [frontend-foundations.com](https://frontend-foundations.com) - [Source Code](https://github.com/alexcarpenter/frontend-foundations)

[Submit your site](https://github.com/alexcarpenter/eleventy-boilerplate/issues/new?title=built+with+eleventy-boilerplate&labels=submission)

## License

MIT
