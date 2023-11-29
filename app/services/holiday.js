import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HolidayService extends Service {
  @tracked holidays = [
    {
      start_date: new Date(2023, 11, 27),
      end_date: new Date(2023, 11, 27),
      description: 'Saugat needs to go to the dentist',
      team: 'Aarhus',
      holiday_type: 'Emergency Leave',
    },
    {
      start_date: new Date(2023, 11, 28),
      end_date: new Date(2023, 11, 29),
      description: 'Oleg is on holiday',
      team: 'Aarhus',
      holiday_type: 'Vacation',
    },
  ];
}
