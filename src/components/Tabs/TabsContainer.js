import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element';

@customElement('tabs-container')
class TabsContainer extends LitElement {
  static get styles() {
    return css`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
      }
    `;
  }

  render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `;
  }
}

export { TabsContainer };
