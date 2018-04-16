var webpackConfig = require('./webpack.config.js');

module.exports = function karmaConfig (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: [
      './karma.entry.js'
    ],
    preprocessors: {
      './karma.entry.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}