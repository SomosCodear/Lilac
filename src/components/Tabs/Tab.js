import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { breakpoints } from '../../constants';

export const TAB_SELECTED_EVENT_NAME = 'tab-selected';

@customElement('lilac-tab')
class Tab extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false

  static get styles() {
    return css`
      button {
        cursor: pointer;
        display: block;
        line-height: 1.875rem;
        width: 3.9075rem;
        text-align: center;
        font-size: 1.1875rem;
        padding: 0;
        margin-right: 0.826875rem;
        border: 0;
        opacity: 0.5;
        border-radius: 0.1875rem 0.1875rem 1.25rem 0.1875rem;
        color: var(--color-text);
        background-color: var(--color-primary);
      }

      :host([active]) button {
        font-weight: bold;
        opacity: 1;
      }

      @media (max-width: ${breakpoints.mobile}) {
        button {
          border-radius: 0.1875rem 0.1875rem 0.1875rem 0.8125rem;
          line-height: 2.1875rem;
          width: 1.875rem;
          margin-right: 0.375rem;
        }
      }
    `;
  }

  fireTabSelected() {
    const event = new CustomEvent(TAB_SELECTED_EVENT_NAME, {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <li>
        <button @click=${this.fireTabSelected}>
          <slot></slot>
        </button>
      </li>
    `;
  }
}

export { Tab };
