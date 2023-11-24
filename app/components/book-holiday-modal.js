import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookHolidayModalComponent extends Component {
  @service holiday;

  @tracked holidays = {
    start_date: Date,
    end_date: Date,
    description: '',
    team: '',
    holiday_type: '',
  };

  @action
  bookHoliday() {
    this.holiday = this.holidays;
    console.log(this.holiday);
  }
}
