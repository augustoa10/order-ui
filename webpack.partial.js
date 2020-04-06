const webpack = require('webpack');

// All moment locale files are excluded from the bundle except from the ones
// listed on `allowedLocales`.
//
// IMPORTANT: the locale 'en' build-in, DO NOT include it on the list.
const allowedLocales = ['pt'];
const allowedLocalesRegex = new RegExp(allowedLocales.join('|'), 'i');

module.exports = {
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, allowedLocalesRegex),
  ]
}
