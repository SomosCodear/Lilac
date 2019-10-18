import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element';

@customElement('lilac-overlay-title')
class OverlayTitle extends LitElement {
  static get styles() {
    return css`
      h2 {
        margin: 0 0 1.25rem;
        font-family: Source Sans Pro;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--color-primary-light);
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <h2>
        <slot></slot>
      </h2>
    `;
  }
}

export { OverlayTitle };
