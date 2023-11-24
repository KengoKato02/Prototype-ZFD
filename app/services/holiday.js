import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HolidayService extends Service {
 @tracked holidays = {
  start_date: Date,
  end_date: Date,
  description: '',
  team: '',
  holiday_type: '',
 }
}
