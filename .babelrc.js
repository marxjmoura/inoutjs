var config = {
  presets: ["@babel/preset-env"]
};

if (process.env.NODE_ENV.match(/test/)) {
  config.plugins = [
    ["istanbul", {
      "exclude": ["src/!(lib)/**/*.js"]
    }]
  ];
}

module.exports = config;
