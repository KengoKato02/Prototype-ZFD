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
  @tracked startOfMonthDate = startOfMonth(new Date(this.currentYear, this.currentMonth - 1, 1));

  @tracked dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  

  @tracked currentWeek = getWeekOfMonth(new Date(this.currentYear, this.currentMonth - 1, this.currentDay));

  
  get calcWeeks() {
    const startDate = new Date(this.startOfMonthDate);
    const startDay = startDate.getDay();
    const daysInPreviousMonth = getDaysInMonth(new Date(this.currentYear, this.currentMonth - 2, 1));
    const weeks = [];
  
    let currentWeek = [];
  
    // Fill the first week with the days from the previous month
    for (let i = 0; i < startDay; i++) {
      currentWeek.push(daysInPreviousMonth - (startDay - i) + 1);
    }
  
    // Fill the remaining days of the first week with the current month
    const totalDaysInMonth = getDaysInMonth(new Date(this.currentYear, this.currentMonth - 1, 1));
    for (let i = 0; i < 7 - startDay; i++) {
      currentWeek.push(i + 1);
    }
    weeks.push(currentWeek);
  
    let remainingDays = totalDaysInMonth - (7 - startDay);
    let week = 1;
    let nextMonth = this.currentMonth + 1;
    let nextYear = this.currentYear;
    let totalDaysInNextMonth = getDaysInMonth(new Date(nextYear, nextMonth - 1, 1));
  
    // Continue filling weeks with the current month
    while (remainingDays > 0) {
      currentWeek = [];
      for (let i = 0; i < 7; i++) {
        const day = week * 7 + i - startDay + 1;
        if (day <= totalDaysInMonth) {
          currentWeek.push(day);
          remainingDays--;
        } else {
          currentWeek.push(day - totalDaysInMonth);
        }
      }
      weeks.push(currentWeek);
      week++;
    }
  
    return weeks;
  }
  
  get firstWeek() {
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const firstWeek = calcWeeksResult[0].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        return { dayNumber: day, dayLabel };
      });
      return firstWeek;
    } else {
      return [];
    }
  }
  
  get secondWeek(){
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const secondWeek = calcWeeksResult[1].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        return { dayNumber: day, dayLabel };
      });
      return secondWeek;
    } else {
      return [];
    }
  }
  get thirdWeek(){
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const thirdWeek = calcWeeksResult[2].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        return { dayNumber: day, dayLabel };
      });
      return thirdWeek;
    } else {
      return [];
    }
  }
  get fourthWeek(){
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const fourthWeek = calcWeeksResult[3].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        return { dayNumber: day, dayLabel };
      });
      return fourthWeek;
    } else {
      return [];
    }
  }
  get fifthWeek(){
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const fifthWeek = calcWeeksResult[4].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        return { dayNumber: day, dayLabel };
      });
      return fifthWeek;
    } else {
      return [];
    }
  }
  

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

    let currentDay = 1; // Start from the 1st day of the month
    const weeks = [];

    
    while (currentDay <= endOfMonthDate.getDate()) {
      const currentWeek = [];
      
      // Fill the current week with days of the month
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(this.currentYear, this.currentMonth - 1, currentDay);

        // Check if the current date is still within the month
        if (currentDate <= endOfMonthDate) {
          currentWeek.push(format(currentDate, 'd'));
          currentDay++;
        } else {
          currentWeek.push('');
        }
      }

      weeks.push([...currentWeek]);
    }

    return weeks;
  }

}
