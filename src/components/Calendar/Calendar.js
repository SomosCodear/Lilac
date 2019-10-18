import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { breakpoints } from '../../constants';
import { formatMonth } from '../../utils/format';

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

  constructor() {
    super();

    this.today = new Date();
  }

  static get styles() {
    return css`
      section {
        position: relative;
        max-width: 47.5rem;
        padding: 1rem;
      }

      header {
        z-index: 1;
      }

      .name {
        display: none;
      }

      .days {
        position: relative;
        padding: 0;
        margin: 0.25rem 0 0;
        min-height: 27rem;
      }

      @media (min-width: ${breakpoints.mobile}) {
        section {
          display: grid;
          grid-template-columns: repeat(auto-fill, 6.25rem);
          grid-auto-rows: 6.25rem;
          grid-gap: 0.625rem;
        }

        header {
          display: flex;
          flex-direction: column-reverse;
          grid-column-start: 1;
          grid-column-end: 5;
        }

        .name {
          display: initial;
          font-size: 4rem;
          font-weight: 100;
          color: var(--color-primary-light);
          margin: 0;
        }

        .days {
          display: contents;
          min-height: unset;
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

  hasEventsForMonth() {
    return this.events.find(({ date }) => {
      const eventDate = new Date(date);
      return eventDate.getFullYear() === this.currentYear
        && eventDate.getMonth() === this.currentMonth;
    }) != null;
  }

  getEventsForDay(day) {
    return this.events.filter(({ date }) => {
      const eventDate = new Date(date);
      return eventDate.getFullYear() === this.currentYear
        && eventDate.getMonth() === this.currentMonth
        && eventDate.getDate() === day;
    });
  }

  handlePreviousMonthEvent() {
    this.currentMonth -= 1;

    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    }
  }

  handleNextMonthEvent() {
    this.currentMonth += 1;

    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    }
  }

  renderDay(currentDay) {
    const events = this.getEventsForDay(currentDay);

    return html`
      <lilac-calendar-day
        day="${currentDay}"
        .events="${events}"
        ?istoday="${this.currentMonth === this.today.getMonth() && this.today.getDate() === currentDay}"
      />
    `;
  }

  renderNoEventsOverlay() {
    return html`
      <lilac-overlay size="big" open>
        <lilac-overlay-title>
          No tenemos eventos agendados para este mes
        </lilac-overlay-title>
      </lilac-overlay>
    `;
  }

  render() {
    const days = Array.from(Array(this.getDaysInMonth()), (_, index) => index + 1);

    return html`
      <section>
        <header>
          <h2 class="name">
            ${this.name}
          </h2>
          <lilac-calendar-month-selector
            currentmonth="${this.currentMonth}"
            currentyear="${this.currentYear}"
            @previous-month-event="${this.handlePreviousMonthEvent}"
            @next-month-event="${this.handleNextMonthEvent}"
          >
          </lilac-calendar-month-selector>
          <lilac-sr-only-text>
            <h3>
              Eventos para ${formatMonth(this.currentMonth, this.currentYear)}
            </h3>
          </lilac-sr-only-text>
        </header>
        <div class="days">
          ${repeat(days, (day) => day, this.renderDay.bind(this))}
          ${!this.hasEventsForMonth() ? this.renderNoEventsOverlay() : null}
        </div>
      </section>
    `;
  }
}

export { Calendar };
