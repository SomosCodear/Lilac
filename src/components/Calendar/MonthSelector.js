import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { colors, breakpoints } from '../../constants';
import { formatMonth } from '../../utils/date';

@customElement('lilac-calendar-month-selector')
class MonthSelector extends LitElement {
  @property({ type: Number, reflect: true })
  currentMonth = (new Date()).getMonth()

  @property({ type: Number, reflect: true })
  currentYear = (new Date()).getFullYear()

  static get styles() {
    return css`
      .month-selector {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .previous-month,
      .next-month {
        display: block;
        padding: 0.5rem 1rem;
        border: solid 1px var(--color-primary-lightest);
        border-radius: 0.625rem;
        background-color: transparent;
        cursor: pointer;
        fill: var(--color-primary-lightest);
      }

      .previous-month:hover,
      .next-month:hover,
      .previous-month:focus,
      .next-month:focus {
        border-color: var(--color-secondary);
        fill: var(--color-secondary);
      }

      .current-month {
        font-family: Source Sans Pro;
        font-size: 1.5rem;
        color: var(--color-primary-light);
      }

      @media (min-width: ${breakpoints.mobile}) {
        .month-selector {
          justify-content: flex-start;
        }

        .previous-month,
        .next-month {
          padding: 0;
          border: 0;
        }

        .current-month {
          padding: 0 0.625rem;
          color: var(--color-primary-lightest);
        }
      }
    `;
  }

  currentMonthText() {
    return formatMonth(this.currentMonth, this.currentYear);
  }

  previousMonthText() {
    let month;
    let year;

    if (this.currentMonth === 0) {
      month = 11;
      year = this.currentYear - 1;
    } else {
      month = this.currentMonth - 1;
      year = this.currentYear;
    }

    return formatMonth(month, year);
  }

  nextMonthText() {
    let month;
    let year;

    if (this.currentMonth === 11) {
      month = 0;
      year = this.currentYear + 1;
    } else {
      month = this.currentMonth + 1;
      year = this.currentYear;
    }

    return formatMonth(month, year);
  }

  render() {
    return html`
      <nav aria-label="Eventos por més">
        <ol class="month-selector">
          <li>
            <button
              class="previous-month"
              aria-label=${`Ver eventos para ${this.previousMonthText()}`}
            >
              <lilac-icon-chevron
                color=${colors.primaryLightest}
                hovercolor=${colors.secondary}
              >
              </lilac-icon-chevron>
            </button>
          </li>
          <li
            class="current-month"
            aria-hidden="true"
          >
            ${this.currentMonthText()}
          </li>
          <li>
            <button
              class="next-month"
              aria-label=${`Ver eventos para ${this.nextMonthText()}`}
            />
              <lilac-icon-chevron
                direction="right"
                color=${colors.primaryLightest}
                hovercolor=${colors.secondary}
              >
              </lilac-icon-chevron>
            </button>
          </li>
        </ol>
      </nav>
    `;
  }
}

export { MonthSelector };
