import {
  LitElement,
  customElement,
  property,
  html,
  css,
} from 'lit-element';

@customElement('lilac-icon-bullet')
class Bullet extends LitElement {
  @property({ type: Number, reflect: true })
  width = 12;

  @property({ type: Number, reflect: true })
  height = 12;

  static get styles() {
    return css`
      svg {
        display: block;
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
        <circle
          cx="6"
          cy="6"
          r="6"
          role="presentation"
        />
      </svg>
    `;
  }
}

export { Bullet };
