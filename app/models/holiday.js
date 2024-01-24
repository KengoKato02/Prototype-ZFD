import Model, { attr } from '@ember-data/model';

export default class HolidayModel extends Model {
  @attr('date') start_date;
  @attr('date') end_date;
  @attr('string') description;
  @attr('number') employee_id;
  @attr('number') holiday_types_id;
}
