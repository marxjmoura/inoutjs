module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/tests/**/*.test.js', included: true },
      { pattern: 'src/tests/fixtures/*.txt', included: false, served: true }
    ],
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
