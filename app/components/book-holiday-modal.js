import Component from '@glimmer/component'
import { service } from '@ember/service'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class BookHolidayModalComponent extends Component {
  @service holiday

  @tracked holidays = {
    holiday_type_id: 2,
    start_date: Date,
    end_date: Date,
    description: '',
  }

  @action
  bookHoliday() {
    this.holiday.addHoliday(this.holidays)
  }
}
