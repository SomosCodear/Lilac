import {
  LitElement,
  html,
  customElement,
  property,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

@customElement('lilac-calendar-day')
class CalendarDay extends LitElement {
  @property({ type: Number, reflect: true })
  day

  @property({ type: Array })
  events = []

  render() {
    return html`
      <li>
        <label>${this.day}</label>
        <ul>
          ${repeat(this.events, ({ title }) => title, ({ title }) => html`
            <li>
              ${title}
            </li>
          `)}
        </ul>
      </li>
    `;
  }
}

export { CalendarDay };
