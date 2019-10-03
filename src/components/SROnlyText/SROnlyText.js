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
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
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
