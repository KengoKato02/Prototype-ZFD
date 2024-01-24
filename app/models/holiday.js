import Model, { attr } from '@ember-data/model';

export default class HolidayModel extends Model {
  @attr('number') holiday_types_id;
  @attr('number') employee_id;
  @attr('date') start_date;
  @attr('date') end_date;
  @attr('string') description;
  @attr('boolean') approval_status;
}
