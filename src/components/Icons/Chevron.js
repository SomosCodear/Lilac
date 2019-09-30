import {
  LitElement,
  customElement,
  property,
  html,
  css,
} from 'lit-element';

@customElement('lilac-icon-chevron')
class Chevron extends LitElement {
  @property({ type: Number, reflect: true })
  width = 8;

  @property({ type: Number, reflect: true })
  height = 20;

  @property({ type: String, reflect: true })
  direction = 'left';

  static get styles() {
    return css`
      svg {
        display: block;
      }
    `;
  }

  render() {
    const transform = this.direction === 'left'
      ? 'translate(23.336 -1.891) rotate(90)'
      : 'translate(-15.336 21.918) rotate(-90)';

    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width=${this.width}
        height=${this.height}
        viewBox="0 0 8 20"
        role="presentation"
      >
        <g transform=${transform}>
          <path
            d="M11.9,23.336a.9.9,0,0,1-.5-.152L1.891,16.843l1-1.507L11.9,21.342l9.009-6.006,1,1.507-9.511,6.341A.906.906,0,0,1,11.9,23.336Z"
            transform="translate(0 0)"
            role="presentation"
          />
        </g>
      </svg>

    `;
  }
}

export { Chevron };
