import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { colors, breakpoints } from '../../constants';
import { formatNumber } from '../../utils/format';

const DAY_NAMES = [
  'dom',
  'lun',
  'mar',
  'mié',
  'jue',
  'vie',
  'sáb',
];

const SR_DAY_NAMES = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sábado',
];

@customElement('lilac-calendar-event')
class Event extends LitElement {
  @property({ type: String, reflect: true })
  date

  @property({ type: String, reflect: true })
  name = ''

  @property({ type: String, reflect: true })
  street = ''

  @property({ type: String, reflect: true })
  city = ''

  @property({ type: String, reflect: true })
  country = ''

  @property({ type: String, reflect: true })
  link = ''

  static get styles() {
    return css`
      .event {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
      }

      .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.625rem;
        background-color: var(--color-secondary);
        border-radius: 0.625rem 0 0 0.625rem;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: var(--color-text);
      }

      .day {
        font-size: 4rem;
        line-height: 4rem;
      }

      .info {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding: 0.625rem 1.25rem;
        border: solid 0.0625rem var(--color-secondary);
        border-right: 0;
      }

      .name {
        flex-grow: 1;
        overflow: hidden;
        font-family: Source Sans Pro;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--color-primary-light);
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .street,
      .city,
      .country {
        color: var(--color-primary);
      }

      .open {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.25rem;
        border: solid 0.0625rem var(--color-secondary);
        border-left: 0;
        border-radius: 0 0.625rem 0.625rem 0;
        fill: var(--color-secondary);
      }

      @media (min-width: ${breakpoints.mobile}) {
        .event {
          display: list-item;
          margin-top: 0;
        }

        .event::marker {
          font-size: 0.9rem;
        }

        .info {
          border: 0;
          padding: 0;
        }

        .name {
          text-transform: none;
          font-weight: 400;
          font-size: inherit;
          color: inherit;
        }

        .date,
        .street,
        .city,
        .open {
          display: none;
        }
      }
    `;
  }

  render() {
    const date = new Date(this.date);

    return html`
      <li class="event">
        <div class="date">
          <div>
            <span aria-hidden="true">
              ${DAY_NAMES[date.getDay()]}
            </span>
            <lilac-sr-only-text>
              ${SR_DAY_NAMES[date.getDay()]}
            </lilac-sr-only-text>
          </div>
          <div class="day">
            ${formatNumber(date.getDate())}
          </div>
          <div>
            <lilac-sr-only-text>
              a las
            </lilac-sr-only-text>
            ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}
          </div>
        </div>
        <div class="info">
          <span
            class="name"
            title="${this.name}"
          >
            ${this.name}
          </span>
          <div class="street">
            <lilac-sr-only-text>
              Dirección:
            </lilac-sr-only-text>
            ${this.street}
          </div>
          <div class="city">
            <lilac-sr-only-text>
              Ciudad:
            </lilac-sr-only-text>
            ${this.city}, ${this.country}
          </div>
        </div>
        <a
          class="open"
          href=${this.link}
          target="_blank"
          aria-label="Abrir página del evento"
        >
          <lilac-icon-chevron direction="right" color=${colors.secondary} width=16 height=40>
          </lilac-icon-chevron>
        </a>
      </li>
    `;
  }
}

export { Event };
