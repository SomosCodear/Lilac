import { ifDefined } from 'lit-html/directives/if-defined';
import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';

@customElement('lilac-input')
class Input extends LitElement {
  @property({ type: String, reflect: true })
  accesskey

  @property({ type: String, reflect: true })
  autocapitalize

  @property({ type: String, reflect: true })
  autocomplete

  @property({ type: Boolean, reflect: true })
  autofocus

  @property({ type: Boolean, reflect: true })
  bold

  @property({ type: Boolean, reflect: true })
  borderless

  @property({ type: String, reflect: true })
  class

  @property({ type: String, reflect: true })
  color = 'primary'

  @property({ type: String, reflect: true })
  dir

  @property({ type: Boolean, reflect: true })
  disabled

  @property({ type: String, reflect: true })
  form

  @property({ type: Boolean, reflect: true })
  hasError

  @property({ type: Boolean, reflect: true })
  hidden

  @property({ type: String, reflect: true })
  id

  @property({ type: String, reflect: true })
  inputmode

  @property({ type: String, reflect: true })
  list

  @property({ type: String, reflect: true })
  name

  @property({ type: Boolean, reflect: true })
  readonly

  @property({ type: Boolean, reflect: true })
  required

  @property({ type: Number, reflect: true })
  tabindex

  @property({ type: String, reflect: true })
  title

  @property({ type: Boolean, reflect: true })
  transparent

  @property({ type: String, reflect: true })
  type

  @property({ type: Boolean, reflect: true })
  uppercase

  @property({ type: String, reflect: true })
  value = ''

  static get styles() {
    return css`
      input {
        margin: 0rem;
        padding: 0.125rem 0.75rem;
        width: auto;
        border-radius: 0.625rem;
        border: 0.0625rem solid var(--color-primary);
        font-family: inherit;
        font-size: 0.875rem;
        color: var(--color-primary);
        line-height: 1.5rem;
      }

      :host([color="secondary"]) input {
        color: var(--color-secondary);
        border-color: var(--color-secondary);
      }

      :host([haserror]) input {
        padding-right: 2.5rem;
        border-color: var(--color-error);
        background-image: url(/assets/icons/icon-error.svg);
        background-position: top 50% right 0.625rem;
        background-repeat: no-repeat;
      }

      :host([bold]) input {
        font-size: 1.25rem;
        font-weight: bold;
        padding: 0.25rem 0.75rem;
      }

      :host([borderless]) input {
        border-width: 0;
      }

      :host([uppercase]) input {
        text-transform: uppercase;
      }

      :host([transparent]) input {
        background-color: rgba(255, 255, 255, 0.9);
      }

      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus,
      :-webkit-autofill:active {
          -webkit-transition-delay: 99999s;
          transition-delay: 99999s
      }
    `;
  }


  updateValue({ target: { value } }) {
    this.value = value;
  }

  render() {
    return html`
      <div>
        <input
          accesskey="${ifDefined(this.accesskey)}"
          autocapitalize="${ifDefined(this.autocapitalize)}"
          autocomplete="${ifDefined(this.autocomplete)}"
          ?autofocus="${this.autofocus}"
          class="${ifDefined(this.class)}"
          dir="${ifDefined(this.dir)}"
          ?disabled="${this.disabled}"
          form="${ifDefined(this.form)}"
          ?hidden="${this.hidden}"
          id="${ifDefined(this.id)}"
          inputmode="${ifDefined(this.inputmode)}"
          list="${ifDefined(this.list)}"
          name="${ifDefined(this.name)}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          tabindex="${ifDefined(this.tabindex)}"
          title="${ifDefined(this.title)}"
          type="${ifDefined(this.type)}"
          .value="${this.value}"
          @input=${this.updateValue}
        />
        ${this.value}
      </div>
    `;
  }
}

export { Input };
