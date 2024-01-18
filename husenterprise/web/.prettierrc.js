'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
        trailingComma: "es5",
        printWidth: 120,
        tabWidth: 2
      },
    },
  ],
};
