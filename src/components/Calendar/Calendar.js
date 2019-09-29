import {
  LitElement,
  html,
  customElement,
  property,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

@customElement('lilac-calendar')
class Calendar extends LitElement {
  @property({ type: String, reflect: true })
  title = ''

  @property({ type: Array })
  events = []


  render() {
    const days = Array.from(Array(31), (_, index) => index + 1);

    return html`
      <section>
        <nav>
          <ol>
            <li>agosto 2019</li>
            <li>septiembre 2019</li>
            <li>octubre 2019</li>
          </ol>
        </nav>
        <h2>${this.title}</h2>
        <ol>
          ${repeat(days, (day) => day, (currentDay) => html`
            <lilac-calendar-day
              day=${currentDay}
              .events=${this.events.filter(({ day: eventDay }) => eventDay === currentDay)}
            />
          `)}
        </ol>
      </section>
    `;
  }
}

export { Calendar };
