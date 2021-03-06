import {
  LitElement,
  html,
  css,
  unsafeCSS,
  customElement,
  property,
} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { breakpoints, mainColorNames } from '../../constants';

@customElement('lilac-button')
class Button extends LitElement {
  @property({ type: String, reflect: true })
  color = 'primary'

  @property({ type: Boolean, reflect: true })
  shadow = false

  @property({ type: Boolean, reflect: true })
  big = false

  @property({ type: Boolean, reflect: true })
  inverted = false

  @property({ type: String, reflect: true })
  type = 'button'

  @property({ type: Boolean, reflect: true })
  disabled = false

  @property({ type: String, reflect: true })
  href = ''

  @property({ type: String, reflect: true })
  title = ''

  @property({ type: String, reflect: true })
  target = ''

  static get styles() {
    return [
      ...mainColorNames.map((color) => css`
        button.${unsafeCSS(color)},
        a.${unsafeCSS(color)} {
          --main-color: var(--color-${unsafeCSS(color)});
        }
      `),
      css`

        button,
        a {
          display: block;
          position: relative;
          box-sizing: border-box;
          width: 100%;
          border: solid 0.125rem var(--main-color);
          border-radius: 0.625rem;
          padding: 0.75rem;
          background-color: var(--main-color);
          text-transform: uppercase;
          color: var(--color-text);
          font-family: Source Sans Pro;
          font-size: 1.5rem;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
        }

        button:disabled,
        a:disabled {
          cursor: not-allowed;
          background-color: var(--color-gray-light);
          border-color: var(--color-gray-light);
        }

        button:hover:before,
        button:focus:before,
        button:active:before,
        a:hover:before,
        a:focus:before,
        a:active:before {
          content: " ";
          position: absolute;
          top: 0.0625rem;
          left: 0.0625rem;
          right: 0.0625rem;
          bottom: 0.0625rem;
          border: 0.125rem solid var(--color-text);
          border-radius: 0.625rem;
        }

        button.shadow,
        a.shadow {
          box-shadow: 0 0.1875rem 0.1875rem #00000059;
        }

        button.inverted,
        a.inverted {
          background-color: var(--color-text);
          color: var(--main-color);
        }

        button.inverted:disabled,
        a.inverted:disabled {
          cursor: not-not-allowed;
          border-color: var(--color-gray-light);
          color: var(--color-gray-light);
        }

        button.inverted:focus:not(:hover),
        a.inverted:focus:not(:hover) {
          border-bottom-width: 0.625rem;
          padding-bottom: 0.25rem;
        }

        button.inverted:hover,
        button.inverted:active,
        a.inverted:hover,
        a.inverted:active {
          background-color: var(--main-color);
          color: var(--color-text);
        }

        @media (min-width: ${breakpoints.mobile}) {
          button.big,
          a.big {
              font-size: 2.75rem;
              padding: 2rem;
          }
        }
      `,
    ];
  }

  buttonClasses() {
    return classMap({
      [this.color]: true,
      shadow: this.shadow,
      big: this.big,
      inverted: this.inverted,
    });
  }

  renderButton() {
    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class=${this.buttonClasses()}
      >
        <slot></slot>
      </button>
    `;
  }

  renderLink() {
    return html`
      <a
        href=${this.href}
        title=${this.title}
        target=${this.target}
        ?disabled=${this.disabled}
        class=${this.buttonClasses()}
      >
        <slot></slot>
      </a>
    `;
  }

  render() {
    return this.href !== '' ? this.renderLink() : this.renderButton();
  }
}

export { Button };
