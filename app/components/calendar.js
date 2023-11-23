import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalendarComponent extends Component {
  @tracked isModalOpen = false;

  @action
  toggleBookHoliday() {
    console.log('called');
    this.isModalOpen = !this.isModalOpen;
  }
}
