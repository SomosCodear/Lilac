import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

const CLOSE_EVENT_NAME = 'lilac-modal-close';

@customElement('lilac-overlay')
class Overlay extends LitElement {
  @property({ type: Boolean, reflect: true })
  open = false

  @property({ type: String, reflect: true })
  size = 'medium'

  static get styles() {
    return css`
      :host {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      :host:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(0.125rem);
      }

      .overlay {
        display: none;
      }

      .overlay.open {
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 0.125rem var(--color-secondary);
        border-radius: 0.625rem;
        background-color: var(--color-text);
        box-shadow: 0 0.1875rem 1.5rem var(--color-gray-lighter);
      }

      .overlay.medium {
        width: 15rem;
        padding: 2.875rem 1.625rem;
      }

      .overlay.big {
        width: 18.125rem;
        padding: 3.125rem 1.625rem;
      }
    `;
  }

  fireClose() {
    const event = new CustomEvent(CLOSE_EVENT_NAME, {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div
        class=${classMap({ overlay: true, [this.size]: true, open: this.open })}
        role="dialog"
      >
        <slot></slot>
      </div>
    `;
  }
}

export { Overlay };
