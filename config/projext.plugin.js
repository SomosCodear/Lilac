const svgPlugin = require('rollup-plugin-svg');

/**
 * @external {Projext} https://homer0.github.io/projext/class/src/app/index.js~Projext.html
 */

/**
 * This is projext's plugin that takes care of two things:
 *
 * 1. It removes `lit-element` and the Babel polyfills for the production build.
 * 2. It removes `.svg` from the rules that handle those files as external images.
 *
 * @param {Projext} app projext's dependency injection container.
 */
module.exports = (app) => {
  /**
   * Get the services the plugin will need:
   * - `events` for subscribing to projext's configurations' events.
   * - `targetFileRules` to create new rules once `lit-element` is added or removed.
   */
  const events = app.get('events');
  const targetsFileRules = app.get('targetsFileRules');
  /**
   * This is the event the Rollup plugin uses to reduce a basic set of parameters that are
   * later use by the services involved in the creation of the Rollup configuration.
   */
  events.on('rollup-configuration-parameters-for-browser', (params) => {
    /**
     * If the build is for `production`, remove `lit-element` and the Babel polyfills; but if the
     * build is for `development`, include `lit-element` (because it has some ES6+ code) as it's
     * needed for the demo app.
     */
    const { target, buildType } = params;
    if (buildType === 'production') {
      target.excludeModules.push('lit-element');
      target.babel.polyfill = false;
    } else {
      target.includeModules.push('lit-element');
    }

    return {
      ...params,
      target,
      /**
       * The target rules are a set of "rule paths" to identify modules, assets and any kind of
       * files a target may include or exclude. Before this event gets generated, they are already
       * generated, that's why once we add/remove `lit-element`, we have to remove them.
       */
      targetRules: targetsFileRules.getRulesForTarget(target),
    };
  });
  /**
   * This is the event the Rollup plugin uses to reduce the configuration of the `urls` plugin,
   * the one that takes assets from the JS, copies them to the build directory and replaces them
   * with URL in the code.
   */
  events.on('rollup-urls-plugin-settings-configuration-for-browser', (settings) => {
    const { urls } = settings;
    // Find the index for the rule that matches `.svg`s.
    const index = urls.findIndex((item) => (
      item.include.some((regex) => 'node_modules/random/file.svg'.match(regex))
    ));

    if (index > -1) {
      const rule = urls[index];
      // Replace all the rule `include` expression with versions that don't include `.svg`.
      rule.include = rule.include.map((expression) => new RegExp(
        expression
          .toString()
          .replace('|svg', '')
          .replace(/^\/(.*?)\/i/, '$1'),
        'i',
      ));
    }

    return settings;
  });
  /**
   * This is the event the Rollup plugin uses to reduce an already created Rollup configuration
   * for a browser target.
   */
  events.on('rollup-browser-configuration', (config) => {
    // We just push the plugin to add the `.svg` files inline.
    config.plugins.push(svgPlugin());
    return config;
  });
};
