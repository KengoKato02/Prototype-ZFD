import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalendarComponent extends Component {
  @tracked isOpen = false;

  @action
  toggleMonthDropDown() {
    this.isOpen = !this.isOpen;
  }
}
