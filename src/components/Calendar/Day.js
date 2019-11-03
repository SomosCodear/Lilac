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
import { formatNumber, inflect } from '../../utils/format';

@customElement('lilac-calendar-day')
class Day extends LitElement {
  @property({ type: Number, reflect: true })
  day

  @property({ type: Array })
  events = []

  @property({ type: Boolean, reflect: true })
  isToday = false

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

      lilac-icon-bullet {
        display: none;
      }

      lilac-icon-plus {
        display: none;
      }

      @media (min-width: ${breakpoints.mobile}) {
        :host {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        .empty {
          display: block;
        }

        .day {
          flex-grow: 1;
          overflow: hidden;
          padding: 0.625rem;
          border: 0.0625rem solid var(--color-secondary);
          border-radius: 0.625rem;
        }

        .day-number {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.5rem;
          color: var(--color-secondary);
        }

        lilac-icon-bullet {
          margin-left: 0.375rem;
        }

        lilac-icon-plus {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          stroke: var(--color-gray);
        }

        .events {
          padding-left: 0.9rem;
          list-style: disc;
          font-size: 0.75rem;
          line-height: 1.5;
          color: var(--color-primary-light);
        }

        .today {
          background-color: var(--color-secondary);
        }

        .today .day-number {
          color: var(--color-text);
          font-weight: 700;
        }

        .today .events {
          padding-left: 0;
          list-style: none;
          font-size: 1.125rem;
          color: var(--color-text);
        }

        lilac-calendar-event {
          display: list-item;
        }

        lilac-calendar-event::marker {
          font-size: 0.9rem;
        }

        .day:hover .day-number {
          font-weight: 700;
        }

        .day:hover lilac-icon-bullet {
          display: block;
          fill: var(--color-secondary);
        }

        .day.today:hover lilac-icon-bullet {
          fill: var(--color-text);
        }
      }
    `;
  }

  renderPlus() {
    return this.events.length > 3
      ? html`<lilac-icon-plus height="16" width="16"></lilac-icon-plus>`
      : null;
  }

  render() {
    return html`
      <div
        class=${classMap({ day: true, today: this.isToday, empty: this.events.length === 0 })}
        aria-hidden="${this.events.length === 0}"
      >
        <div class="day-number">
          <lilac-sr-only-text>
            Eventos para el
          </lilac-sr-only-text>
          ${formatNumber(this.day)}
          <lilac-sr-only-text>
            Hay ${this.events.length} ${inflect(this.events.length, 'evento', 'eventos')} para este día
          </lilac-sr-only-text>
          <lilac-icon-bullet></lilac-icon-bullet>
          ${this.renderPlus()}
        </div>
        <div class="events" role="list">
          ${repeat(this.events, ({ name, date }) => `${name} ${date}`, (event) => html`
            <lilac-calendar-event
              role="listitem"
              date=${event.date}
              name=${event.name}
              street=${event.street}
              city=${event.city}
              country=${event.country}
              link=${event.link}
            >
            </lilac-calendar-event>
          `)}
        </div>
      </div>
    `;
  }
}

export { Day };
