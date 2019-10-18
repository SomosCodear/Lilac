import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

@customElement('lilac-button')
class Button extends LitElement {
  @property({ type: Boolean, reflect: true })
  secundario = false

  static get styles() {
    return css`
      button {
        position: relative;
        width: 100%;
        border: solid 0.125rem var(--color-secondary);
        border-radius: 0.625rem;
        padding: 0.75rem;
        background-color: var(--color-secondary);
        text-transform: uppercase;
        color: var(--color-text);
        font-family: Source Sans Pro;
        font-size: 1.5rem;
        cursor: pointer;
      }

      button:disabled {
        cursor: not-allowed;
        background-color: var(--color-gray-light);
      }

      button:hover:before,
      button:focus:before,
      button:active:before {
        content: " ";
        position: absolute;
        top: 0.0625rem;
        left: 0.0625rem;
        right: 0.0625rem;
        bottom: 0.0625rem;
        border: 0.125rem solid var(--color-text);
        border-radius: 0.625rem;
      }

      button.secundario {
        background-color: var(--color-text);
        color: var(--color-secondary);
      }

      button.secundario:disabled {
        cursor: not-not-allowed;
        border-color: var(--color-gray-light);
        color: var(--color-gray-light);
      }

      button.secundario:focus:not(:hover) {
        border-bottom-width: 0.625rem;
        padding-bottom: 0.25rem;
      }

      button.secundario:hover,
      button.secundario:active {
        background-color: var(--color-secondary);
        color: var(--color-text);
      }
    `;
  }

  render() {
    return html`
      <button class=${classMap({ secundario: this.secundario })}>
        <slot></slot>
      </button>
    `;
  }
}

export { Button };
