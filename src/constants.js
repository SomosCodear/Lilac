import { unsafeCSS } from 'lit-element';

// css variables can't be used on media queries' definitions, hence we have to use js variables
export const breakpoints = {
  potato: unsafeCSS('25.4rem'),
  mobile: unsafeCSS('45rem'),
  smallScreen: unsafeCSS('80rem'),
};

export const colors = {
  primary: '#302D63',
  primaryLight: '#3C467E',
  primaryLightest: '#657CBD',
  secondary: '#A70050',
  text: '#FFFFFF',
};
