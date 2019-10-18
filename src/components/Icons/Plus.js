import {
  LitElement,
  customElement,
  property,
  html,
  css,
} from 'lit-element';

@customElement('lilac-icon-plus')
class Plus extends LitElement {
  @property({ type: Number, reflect: true })
  width = 12;

  @property({ type: Number, reflect: true })
  height = 12;

  static get styles() {
    return css`
      svg {
        display: block;
        stroke-width: 0.125rem;
      }
    `;
  }

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 12 12"
        role="presentation"
      >
        <line y2="12" transform="translate(6)" role="presentation"/>
        <line x2="12" transform="translate(0 6)" role="presentation"/>
      </svg>
    `;
  }
}

export { Plus };
