import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { format, getDaysInMonth, startOfMonth, endOfMonth, addDays, getWeekOfMonth } from 'date-fns';
import { service } from '@ember/service';
import { computed } from '@ember/object';

export default class CalendarComponent extends Component {
  @service holiday;
  @service employee;

  @tracked isModalOpen = false;
  @tracked isSidePanelOpen = false;

  @tracked currentYear = new Date().getFullYear();
  @tracked currentMonth = new Date().getMonth() + 1;
  @tracked currentMonthName = format(
    new Date(2023, this.currentMonth - 1, 1),
    'MMMM'
  );

  @tracked currentDay = new Date().getDate();
  @tracked currentDayName = format(
    new Date(2023, this.currentMonth - 1, this.currentDay),
    'EEEE'
  );

  @tracked endOfMonthDate = endOfMonth(new Date(this.currentYear, this.currentMonth - 1, 1));

  @tracked daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  

  @tracked currentWeek = getWeekOfMonth(new Date(this.currentYear, this.currentMonth - 1, this.currentDay));

  @action
  toggleBookHoliday() {
    this.isModalOpen = !this.isModalOpen;
  }

  @action
  toggleSidePanel() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
  }

  @action
  nextMonth() {
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.currentMonthName = format(
      new Date(2023, this.currentMonth - 1, 1),
      'MMMM'
    );
  }

  @action
  previousMonth() {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.currentMonthName = format(
      new Date(2023, this.currentMonth - 1, 1),
      'MMMM'
    );
  }

  @action
  nextWeek(){
    if (this.currentWeek === 5) {
      this.currentWeek = 1;
      this.nextMonth();
    } else {
      this.currentWeek++;
    }
  }

  @action
  previousWeek(){
    if (this.currentWeek === 1) {
      this.currentWeek = 5;
      this.previousMonth();
    } else {
      this.currentWeek--;
    }
  }

  @computed
  get daysInMonth() {
    const daysInMonth = getDaysInMonth(new Date(this.currentYear, this.currentMonth - 1));
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  @computed
  get weeksInMonth() {
    const startOfMonthDate = startOfMonth(new Date(this.currentYear, this.currentMonth - 1, 1));
    const endOfMonthDate = endOfMonth(new Date(this.currentYear, this.currentMonth - 1, 1));
    let currentWeek = [];
    const weeks = [];

    // Push all days of the month into currentWeek array
    for (let currentDate = startOfMonthDate; currentDate <= endOfMonthDate; currentDate = addDays(currentDate, 1)) {
      currentWeek.push(format(currentDate, 'd'));

      if (currentDate.getDay() === 6) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    }

    // Populate weeks array with days of the month
    let currentDay = 0;
    for (let i = 0; i < weeks.length; i++) {
      for (let j = 0; j < weeks[i].length; j++) {
        weeks[i][j] = currentDay < weeks[i].length ? currentDay + 1 : '';
        currentDay++;
      }
    }

    

    return weeks;
  }

}
