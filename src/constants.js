import { unsafeCSS } from 'lit-element';

// css variables can't be used on media queries' definitions, hence we have to use js variables
export const breakpoints = {
  potato: unsafeCSS('25.4rem'),
  mobile: unsafeCSS('45rem'),
  smallScreen: unsafeCSS('80rem'),
};

export const colors = {
  colorPrimary: '#302D63',
  primaryLight: '#3C467E',
  primaryLighter: '#5565AF',
  primaryLightest: '#657CBD',
  secondary: '#A70055',
  secondaryLight: '#C05774',
  secondaryLighter: '#E0B8C5',
  secondaryLightest: '#EDCFD1',
  accent: '#EC008C',
  accentLight: '#F49AC1',
  gray: '#636466',
  grayLight: '#939598',
  grayLighter: '#C7C8CA',
  text: '#FFFFFF',
  black: '#000000',
};
