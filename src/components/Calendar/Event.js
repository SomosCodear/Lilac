import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element';
import { colors, breakpoints } from '../../constants';

const DAY_NAMES = [
  'dom',
  'lun',
  'mar',
  'mié',
  'jue',
  'vie',
  'sáb',
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
        padding: 0.625rem 1.25rem;
        border: solid 1px var(--color-secondary);
        border-right: 0;
      }

      .name {
        flex-grow: 1;
        font-family: Source Sans Pro;
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--color-primary-light);
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
        border: solid 1px var(--color-secondary);
        border-left: 0;
        border-radius: 0 0.625rem 0.625rem 0;
        fill: var(--color-secondary);
      }

      @media (min-width: ${breakpoints.mobile}) {
        .info {
          border: 0;
          padding: 0;
        }

        .name {
          text-transform: none;
          font-size: 0.75rem;
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

  formatNumber(value) {
    return value.toLocaleString('es-AR', { minimumIntegerDigits: 2 });
  }

  render() {
    const date = new Date(this.date);

    return html`
      <li class="event" aria-label="Evento">
        <div class="date" aria-label="Fecha">
          <div aria-label="Día de la semana">
            ${DAY_NAMES[date.getDay()]}
          </div>
          <div class="day" aria-label="Día del més">
            ${this.formatNumber(date.getDate())}
          </div>
          <div aria-label="Hora del día">
            ${this.formatNumber(date.getHours())}:${this.formatNumber(date.getMinutes())}
          </div>
        </div>
        <div class="info" aria-label="Información">
          <label class="name" arial-label="Nombre">
            ${this.name}
          </label>
          <div class="street" aria-label="Dirección">
            ${this.street}
          </div>
          <div class="city" aria-label="Ciudad y país">
            ${this.city}, ${this.country}
          </div>
        </div>
        <a
          class="open"
          href=${this.link}
          target="_blank"
          aria-label="Link del evento"
        >
          <lilac-icon-chevron direction="right" color=${colors.secondary} width=16 height=40>
          </lilac-icon-chevron>
        </a>
      </li>
    `;
  }
}

export { Event };
