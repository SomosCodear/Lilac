import { unsafeCSS } from 'lit-element';

// css variables can't be used on media queries' definitions, hence we have to use js variables
export const breakpoints = {
  potato: unsafeCSS('25.4rem'),
  mobile: unsafeCSS('45rem'),
  smallScreen: unsafeCSS('80rem'),
};

export const mainColorNames = [
  'primary',
  'primary-light',
  'primary-lighter',
  'primary-lightest',
  'secondary',
  'secondary-light',
  'secondary-lighter',
  'secondary-lightest',
  'accent',
  'accent-light',
];

/* eslint-disable no-multi-spaces */
export const colors = {
  colorPrimary: '#302D63',        // Jakarta
  primaryLight: '#3C467E',        // East Bay
  primaryLighter: '#5565AF',      // Blue Violet
  primaryLightest: '#657CBD',     // Ship Cove
  secondary: '#A70055',           // Disco
  secondaryLight: '#C05774',      // Blush
  secondaryLighter: '#E0B8C5',    // Blossom
  secondaryLightest: '#EDCFD1',   // Vanilla Ice
  accent: '#EC008C',              // Hollywood Cerise
  accentLight: '#F49AC1',         // Illusion
  gray: '#636466',                // Shuttle Gray
  grayLight: '#939598',           // Oslo Gray
  grayLighter: '#C7C8CA',         // Silver Sand
  text: '#FFFFFF',                // White
  black: '#000000',               // Black
};
/* eslint-enable no-multi-spaces */
