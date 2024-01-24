import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookHolidayModalComponent extends Component {
  @service holidayData;

  @tracked holidays = {
    holiday_type_id: 2,
    start_date: Date,
    end_date: Date,
    description: '',
  };

  @tracked input = {
    start_date: Date,
    end_date: Date,
    description: '',
    employee_id: 1,
  };

  @action
  bookHoliday() {
    this.holidayData.addHoliday(this.holidays);
  }
}
