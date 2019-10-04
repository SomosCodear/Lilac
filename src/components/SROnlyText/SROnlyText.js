import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element';

@customElement('lilac-sr-only-text')
class SROnlyText extends LitElement {
  static get styles() {
    return css`
      .sr-only {
        position: absolute;
        width: 0.0625rem;
        height: 0.0625rem;
        padding: 0;
        margin: -0.0625rem;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `;
  }

  render() {
    return html`
      <span class="sr-only">
        <slot></slot>
      </span>
    `;
  }
}

export { SROnlyText };
