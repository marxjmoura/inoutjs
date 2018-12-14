module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    files: ['src/tests/**/*.test.js'],
    preprocessors: {
      'src/**/*.js': ['webpack']
    },
    webpack: require('./.webpack.config'),
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'src/tests/coverage',
      reporters: [
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
        { type: 'html', subdir: './html' }
      ]
    }
  });
}
