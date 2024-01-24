import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';
import { service } from '@ember/service';

export default class HolidayDataService extends Service {
  @service store;

  async getHolidays() {
    const holidays = await this.store.findAll('holiday');
    return holidays;
  }

  async addHoliday(holidayInput) {
    console.log(holidayInput);
    const newHoliday = this.store.createRecord('holiday', holidayInput);
    try {
      await newHoliday.save();
    } catch (error) {
      console.error('Error adding holiday:', error);
    }
  }

  @tracked holidays = [
    {
      start_date: new Date(2024, 1, 24),
      end_date: new Date(2024, 1, 26),
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
