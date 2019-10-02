import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { breakpoints } from '../../constants';

@customElement('lilac-calendar')
class Calendar extends LitElement {
  @property({ type: String, reflect: true })
  name = ''

  @property({ type: Array })
  events = []

  @property({ type: Number, reflect: true })
  currentMonth = (new Date()).getMonth()

  @property({ type: Number, reflect: true })
  currentYear = (new Date()).getFullYear()

  static get styles() {
    return css`
      .name {
        display: none;
      }

      .days {
        list-style: none;
        padding: 0;
        margin: 0.25rem 0 0;
      }

      lilac-calendar-day {
        margin-top: 1rem;
      }

      @media (min-width: ${breakpoints.mobile}) {
        section {
          display: grid;
          grid-template-columns: repeat(auto-fill, 6.25rem);
          grid-auto-rows: 6.25rem;
          grid-gap: 0.625rem;
        }

        header {
          grid-column-start: 1;
          grid-column-end: 5;
        }

        .name {
          display: initial;
          font-size: 4rem;
          font-weight: 100;
          color: var(--color-primary-light);
        }

        .days {
          display: contents;
        }

        lilac-calendar-day {
          margin: 0;
        }
      }
    `;
  }

  getDaysInMonth() {
    // passing 0 to the day parameter makes the new date to point to the last day of the previous
    // month; hence the currentMonth + 1
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    return lastDay.getDate();
  }

  getEventsForDay(day) {
    return this.events.filter(({ date }) => {
      const eventDate = new Date(date);
      return eventDate.getFullYear() === this.currentYear
        && eventDate.getMonth() === this.currentMonth
        && eventDate.getDate() === day;
    });
  }

  renderDay(currentDay) {
    const events = this.getEventsForDay(currentDay);

    return html`
      <lilac-calendar-day
        day=${currentDay}
        .events=${events}
        aria-hidden=${events.length === 0}
      />
    `;
  }

  render() {
    const days = Array.from(Array(this.getDaysInMonth()), (_, index) => index + 1);

    return html`
      <section>
        <header>
          <lilac-calendar-month-selector></lilac-calendar-month-selector>
          <h2 class="name">
            ${this.name}
          </h2>
        </header>
        <ol class="days">
          ${repeat(days, (day) => day, this.renderDay.bind(this))}
        </ol>
      </section>
    `;
  }
}

export { Calendar };
