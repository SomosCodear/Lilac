import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map';
import { breakpoints } from '../../constants';

@customElement('lilac-calendar-day')
class Day extends LitElement {
  @property({ type: Number, reflect: true })
  day

  @property({ type: Array })
  events = []

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .empty {
        display: none;
      }

      .day-number {
        display: none;
      }

      .events {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      @media (min-width: ${breakpoints.mobile}) {
        .empty,
        .day-number {
          display: block;
        }
      }
    `;
  }

  render() {
    return html`
      <li
        class=${classMap({ day: true, empty: this.events.length === 0 })}
      >
        <label class="day-number">${this.day}</label>
        <ul class="events">
          ${repeat(this.events, ({ name, date }) => `${name} ${date}`, (event) => html`
            <lilac-calendar-event
              date=${event.date}
              name=${event.name}
              street=${event.street}
              city=${event.city}
              country=${event.country}
              link=${event.link}
            >
            </lilac-calendar-event>
          `)}
        </ul>
      </li>
    `;
  }
}

export { Day };
