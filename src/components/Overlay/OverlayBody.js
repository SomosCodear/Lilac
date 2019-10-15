import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element';

@customElement('lilac-overlay-body')
class OverlayBody extends LitElement {
  static get styles() {
    return css`
      p {
        margin: 0 0 1.875rem;
        font-family: Source Sans Pro;
        color: var(--color-primary);
      }
    `;
  }

  render() {
    return html`
      <p>
        <slot></slot>
      </p>
    `;
  }
}

export { OverlayBody };
