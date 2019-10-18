module.exports = {
  targets: {
    lilac: {
      type: 'browser',
      output: {
        default: {
          js: '[target-name].js',
          css: '[target-name].css',
        },
      },
    },
  },
};
