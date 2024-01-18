// ember-build-cli.js

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    postcssOptions: {
      cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\/config\.js$/],
      compile: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './config/tailwindcss/tailwind.config.js',
            },
          },
          {
            module: require('postcss-import'),
          },
        ],
      },
    },
  });

  return app.toTree();
};
