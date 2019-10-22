module.exports = {
  targets: {
    lilac: {
      type: 'browser',
      includeModules: [
        'lit-element',
      ],
      output: {
        default: {
          js: '[target-name].js',
          css: '[target-name].css',
        },
      },
    },
  },
};
