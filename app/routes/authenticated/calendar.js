import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';
import {
  format,
  getDaysInMonth,
  startOfMonth,
  endOfMonth,
  getWeek,
  getWeekOfMonth,
  compareAsc,
} from 'date-fns';
import { service } from '@ember/service';

export default class AuthenticatedCalendarRoute extends Route {
  @service holidayData;
  @service employee;

  @tracked isModalOpen = false;
  @tracked isSidePanelOpen = false;

  @tracked currentYear = new Date().getFullYear();
  @tracked activeMonth = new Date().getMonth() + 1;
  @tracked activeMonthName = format(
    new Date(2023, this.activeMonth - 1, 1),
    'MMMM'
  );

  @tracked endOfMonthDate = endOfMonth(
    new Date(this.currentYear, this.activeMonth - 1, 1)
  );
  @tracked startOfMonthDate = startOfMonth(
    new Date(this.currentYear, this.activeMonth - 1, 1)
  );
  @tracked currentMonth = new Date().getMonth() + 1;

  @tracked dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  @tracked currentWeekYear = getWeek(
    new Date(this.currentYear, this.activeMonth - 1, this.currentDay)
  );
  @tracked currentWeek = getWeekOfMonth(
    new Date(this.currentYear, this.activeMonth - 1, this.currentDay)
  );

  @tracked currentDay = new Date().getDate();
  @tracked currentDayName = format(
    new Date(2023, this.activeMonth - 1, this.currentDay),
    'EEEE'
  );

  shownEvents = tracked([]);
  calcShownEvents = tracked([]);

  async model() {
    return {};
  }

  // setupController(controller, model, transition) {
  //   super.setupController(controller, model, transition);
  //   controller.set('activeMonth', this.activeMonth);
  //   controller.set('currentYear', this.currentYear);
  //   controller.set('previousWeek', this.previousWeek.bind(this));
  //   controller.set('currentWeekYear', this.currentWeekYear);
  //   controller.set('nextWeek', this.nextWeek.bind(this));
  //   controller.set('toggleBookHoliday', this.toggleBookHoliday.bind(this));
  //   controller.set('toggleSidePanel', this.toggleSidePanel.bind(this));
  //   controller.set('isModalOpen', this.isModalOpen);
  //   controller.set('currentWeek', this.currentWeek);
  //   controller.set('firstWeek', this.firstWeek);
  //   controller.set('secondWeek', this.secondWeek);
  //   controller.set('thirdWeek', this.thirdWeek);
  //   controller.set('fourthWeek', this.fourthWeek);
  //   controller.set('fifthWeek', this.fifthWeek);
  //   controller.set('currentDay', this.currentDay);
  //   controller.set('currentMonth', this.currentMonth);
  //   controller.set('shownEvents', this.shownEvents);
  //   controller.set('isSidePanelOpen', this.isSidePanelOpen);
  //   controller.set('employee', this.employee);
  // }

  constructor() {
    super(...arguments);
    this.events(this.holidayData.holidays);
  }

  events(eventInput) {
    eventInput.forEach((input) => {
      const eventStartDate = new Date(input.start_date);
      const eventEndDate = new Date(input.end_date);

      // let currentDate = new Date(eventStartDate);
      // console.log(this.activeMonth);
      // console.log(eventStartDate.getMonth()+1);
      // console.log(compareAsc((eventStartDate.getMonth()+1), this.activeMonth))

      while (compareAsc(eventStartDate, eventEndDate) <= 0) {
        if (compareAsc(eventStartDate.getMonth() + 1, this.activeMonth) === 0) {
          //Check whether the event is same as the current month
          const weekOfEvent = getWeekOfMonth(eventStartDate);
          // console.log(weekOfEvent);
          // console.log(this.currentWeek);
          if (weekOfEvent === this.currentWeek) {
            const dayDiff = eventEndDate.getDate() - eventStartDate.getDate();
            if (dayDiff >= 7) {
              input.dayDiff = 7;
            }
            input.dayDiff = dayDiff;
            this.shownEvents.push(input);

            break;
          }
        }

        // Move to the next day
        eventStartDate.setDate(eventStartDate.getDate() + 1);
      }
    });
    console.log(this.shownEvents);
  }

  get calcWeeks() {
    console.log(this.holidayData.getHolidays());
    const startDate = new Date(this.startOfMonthDate);
    const startDay = startDate.getDay();
    const daysInPreviousMonth = getDaysInMonth(
      new Date(this.currentYear, this.activeMonth - 2, 1)
    );
    const weeks = [];

    let currentWeek = [];

    // Fill the first week with the days from the previous month
    for (let i = startDay - 1; i >= 0; i--) {
      currentWeek.push(daysInPreviousMonth - i);
    }

    // Fill the remaining days of the first week with the current month
    const totalDaysInMonth = getDaysInMonth(
      new Date(this.currentYear, this.activeMonth - 1, 1)
    );

    for (let i = 0; i < 7 - startDay; i++) {
      currentWeek.push(i + 1);
    }

    weeks.push(currentWeek);

    let remainingDays = totalDaysInMonth - (7 - startDay);
    let week = 1;

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
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth() + 1;
        return { dayNumber: day, dayLabel, month };
      });
      return firstWeek;
    } else {
      return [];
    }
  }
  get secondWeek() {
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const secondWeek = calcWeeksResult[1].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth() + 1;
        return { dayNumber: day, dayLabel, month };
      });
      return secondWeek;
    } else {
      return [];
    }
  }
  get thirdWeek() {
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const thirdWeek = calcWeeksResult[2].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth() + 1;
        return { dayNumber: day, dayLabel, month };
      });
      return thirdWeek;
    } else {
      return [];
    }
  }
  get fourthWeek() {
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const fourthWeek = calcWeeksResult[3].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth() + 1;
        return { dayNumber: day, dayLabel, month };
      });
      return fourthWeek;
    } else {
      return [];
    }
  }
  get fifthWeek() {
    const calcWeeksResult = this.calcWeeks;
    if (calcWeeksResult.length > 0) {
      const fifthWeek = calcWeeksResult[4].map((day, index) => {
        const dayLabel = this.dayLabels[index];
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth() + 1;
        return { dayNumber: day, dayLabel, month };
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
    if (this.activeMonth === 12) {
      this.activeMonth = 1;
      this.currentYear++;
    } else {
      this.activeMonth++;
    }
    this.activeMonthName = format(
      new Date(2023, this.activeMonth - 1, 1),
      'MMMM'
    );
  }

  @action
  previousMonth() {
    if (this.activeMonth === 1) {
      this.activeMonth = 12;
      this.currentYear--;
    } else {
      this.activeMonth--;
    }
    this.activeMonthName = format(
      new Date(2023, this.activeMonth - 1, 1),
      'MMMM'
    );
  }

  @action
  nextWeek() {
    if (this.currentWeek === 5) {
      this.currentWeek = 1;
      this.nextMonth();
    } else {
      this.currentWeek++;
    }

    if (this.currentWeekYear === 52) {
      this.currentWeekYear = 1;
    } else {
      this.currentWeekYear++;
    }
  }

  @action
  previousWeek() {
    if (this.currentWeek === 1) {
      this.currentWeek = 5;
      this.previousMonth();
    } else {
      this.currentWeek--;
    }

    if (this.currentWeekYear === 1) {
      this.currentWeekYear = 52;
    } else {
      this.currentWeekYear--;
    }
  }

  get daysInMonth() {
    const daysInMonth = getDaysInMonth(
      new Date(this.currentYear, this.activeMonth - 1)
    );
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }
}
