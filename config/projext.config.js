module.exports = {
  targets: {
    lilac: {
      type: 'browser',
      output: {
        default: {
          js: '[target-name].js',
        },
      },
      babel: {
        features: {
          classProperties: true,
          decorators: true,
        },
      },
    },
  },
};
