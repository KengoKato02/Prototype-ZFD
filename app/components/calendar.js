import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eachDayOfInterval, format, startOfDay } from 'date-fns';

export default class CalendarComponent extends Component {
  @tracked visibleStartIndex;
  numberOfVisibleDates = 12;
  @tracked visibleMonth;


  //When the component is created, it runs constructor to set up the initial state of the calendar.

  constructor() {
    super(...arguments);
    this.initializeVisibleDates();
  }

  //this function sets calendar to be displayed from today`s date
  //it uses calculateIndex function to find index of today`s date in array of formattedDates and updates visible month based on todays daye

  initializeVisibleDates() {
    const currentDate = startOfDay(new Date());
    this.visibleStartIndex = this.calculateIndex(currentDate);
    this.updateVisibleMonth();
  }

  //this function is used in initializeVisibleDates function and takes a date, 
  //formats it to match the format used in formattedDates array and finds its index

  calculateIndex(date) {
    const formattedDates = this.formattedDates.map((day) => day.dayOfMonth);
    return formattedDates.indexOf(format(date, 'MMM dd yyy'));
  }

  

  //determines which dates should be shown in calendar based on the users navigation
  // visibleStartIndex represent start of visible days and is updated during navigation
  // this.numberOfVisibleDates shows how many dates should be visible at the same time (=12)

  get visibleDates() {
    return this.formattedDates.slice(
      this.visibleStartIndex, // starting indes of the slice
      this.visibleStartIndex + this.numberOfVisibleDates //ending index of the slice
    );
  }



  //getter that generates an array of objects representing each day starting from Jan 1, 2023, to Dec 31, 2026.
  //Each object has formatted properties dayOfMonth and dayOfWeek.

  get formattedDates() {
    const startDate = new Date(2023, 0, 1);
    const endDate = new Date(2026, 11, 31);

    return eachDayOfInterval({ start: startDate, end: endDate }).map((day) => ({
      dayOfMonth: format(day, 'MMM dd yyy'),
      dayOfWeek: format(day, 'iii'), // = (Mon, Tue, and so on)
    }));
  }


  //this function calculates and updates visibleMonth based on the first date that is currently visible in calendar
  //checks if format is valid and if yes it updates visibleMonth 
  updateVisibleMonth() {
    const firstVisibleDate = this.formattedDates[this.visibleStartIndex];
    if (firstVisibleDate) {
      this.visibleMonth = format(new Date(firstVisibleDate.dayOfMonth), 'MMMM yyyy');
      console.log('Updated visibleMonth:', this.visibleMonth);
    }
  }

  @action
  showNextDates() {
    this.visibleStartIndex += this.numberOfVisibleDates;
    this.updateVisibleMonth();
  }

  @action
  showPreviousDates() {
    this.visibleStartIndex -= this.numberOfVisibleDates;
    this.updateVisibleMonth();
  }

  get formattedToday() {
    return format(startOfDay(new Date()), 'iii MMMM d, yyyy');  //getter used to display current date in specified format
  }
}



