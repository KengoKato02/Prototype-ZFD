import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { format, getDaysInMonth, startOfMonth, endOfMonth, addDays, getWeek, getWeekOfMonth } from 'date-fns';
import { service } from '@ember/service';
import { computed } from '@ember/object';

export default class CalendarComponent extends Component {
  @service holiday;
  @service employee;

  @tracked isModalOpen = false;
  @tracked isSidePanelOpen = false;

  @tracked currentYear = new Date().getFullYear();
  @tracked activeMonth = new Date().getMonth() + 1;
  @tracked activeMonthName = format(
    new Date(2023, this.activeMonth - 1, 1),
    'MMMM'
  );

  @tracked currentMonth = new Date().getMonth() + 1;

  @tracked currentDay = new Date().getDate();
  @tracked currentDayName = format(
    new Date(2023, this.activeMonth - 1, this.currentDay),
    'EEEE'
  );

  @tracked endOfMonthDate = endOfMonth(new Date(this.currentYear, this.activeMonth - 1, 1));
  @tracked startOfMonthDate = startOfMonth(new Date(this.currentYear, this.activeMonth - 1, 1));

  @tracked dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  

  @tracked currentWeekYear = getWeek(new Date(this.currentYear, this.activeMonth - 1, this.currentDay));
  @tracked currentWeek = getWeekOfMonth(new Date(this.currentYear, this.activeMonth - 1, this.currentDay));
  

  @tracked eventTest = [
    {
      start_date: new Date(2023, 11, 27),
      end_date: new Date(2023, 11, 27),
      description: 'Saugat needs to go to the dentist',
      team: 'Aarhus',
      holiday_type: 'Emergency Leave',

    },
    {
      start_date: new Date(2023, 11, 22),
      end_date: new Date(2023, 11, 23),
      description: 'Oleg is on holiday',
      team: 'Aarhus',
      holiday_type: 'Vacation',
    },
  ];

  @tracked shownEvents = [];
  @tracked calcShownEvents = [];

  constructor(){
    super(...arguments);
    this.events(this.eventTest);
  }  

  events(eventInput) {
    eventInput.forEach((input) => {
      const eventStartDate = input.start_date;
      const eventEndDate = input.end_date;
  
      let currentDate = new Date(eventStartDate);
  
      while (currentDate <= eventEndDate) {  //Use the date-fns library compare function
        if (currentDate.getMonth() >= this.activeMonth) {
          const weekOfMonth = getWeekOfMonth(currentDate);
          if (weekOfMonth === this.currentWeek) {    

            this.shownEvents.push(input);
            break; 
          }
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });
  }

  get calcWeeks() {
    const startDate = new Date(this.startOfMonthDate);
    const startDay = startDate.getDay();
    const daysInPreviousMonth = getDaysInMonth(new Date(this.currentYear, this.activeMonth - 2, 1));
    const weeks = [];
  
    let currentWeek = [];
  
    // Fill the first week with the days from the previous month
    for (let i = startDay - 1; i >= 0; i--) {
      currentWeek.push(daysInPreviousMonth - i);
    }
  
    // Fill the remaining days of the first week with the current month
    const totalDaysInMonth = getDaysInMonth(new Date(this.currentYear, this.activeMonth - 1, 1));
  
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
        const month = tempDate.getMonth()+1;
        return { dayNumber: day, dayLabel, month };
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
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth()+1;
        return { dayNumber: day, dayLabel, month };
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
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth()+1;
        return { dayNumber: day, dayLabel, month };
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
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth()+1;
        return { dayNumber: day, dayLabel, month };
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
        const tempDate = new Date(this.currentYear, this.activeMonth - 1, day);
        const month = tempDate.getMonth()+1;
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
  nextWeek(){
    if (this.currentWeek === 5) {
      this.currentWeek = 1;
      this.nextMonth();
    } else {
      this.currentWeek++;
    }

    if (this.currentWeekYear === 52) {
      this.currentWeekYear = 1;
    }else{
      this.currentWeekYear++;
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

    if(this.currentWeekYear === 1){
      this.currentWeekYear = 52;
    }else{
      this.currentWeekYear--;
    }
  }
  

  @computed
  get daysInMonth() {
    const daysInMonth = getDaysInMonth(new Date(this.currentYear, this.activeMonth - 1));
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  @computed
  get weeksInMonth() {
    const startOfMonthDate = startOfMonth(new Date(this.currentYear, this.activeMonth - 1, 1));
    const endOfMonthDate = endOfMonth(new Date(this.currentYear, this.activeMonth - 1, 1));

    let currentDay = 1; // Start from the 1st day of the month
    const weeks = [];

    
    while (currentDay <= endOfMonthDate.getDate()) {
      const currentWeek = [];
      
      // Fill the current week with days of the month
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(this.currentYear, this.activeMonth - 1, currentDay);

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
