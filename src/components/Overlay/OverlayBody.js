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
        margin: 1.5rem 0;
        font-family: Source Sans Pro;
        color: var(--color-primary);
        text-align: center;
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
