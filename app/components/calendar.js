import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {format} from 'date-fns';


export default class CalendarComponent extends Component {
  @tracked isModalOpen = false;
  @tracked currentYear = new Date().getFullYear();
  @tracked currentMonth = new Date().getMonth() + 1;
  @tracked currentMonthName = format(new Date(2023, this.currentMonth - 1, 1), 'MMMM');
  

  @action
  toggleBookHoliday() {
    console.log('called');
    this.isModalOpen = !this.isModalOpen;
    console.log(this.currentMonth)
    console.log(this.currentMonthName)
  }

  @action
  nextMonth() {
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.currentMonthName = format(new Date(2023, this.currentMonth - 1, 1), 'MMMM');
  }

  @action
  previousMonth() {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.currentMonthName = format(new Date(2023, this.currentMonth - 1, 1), 'MMMM');
  }
}
