import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element';

@customElement('lilac-overlay-actions')
class OverlayActions extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
      }

      .actions {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      ::slotted(:not(:first-child)) {
        margin-top: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class="actions">
        <slot></slot>
      </div>
    `;
  }
}

export { OverlayActions };
