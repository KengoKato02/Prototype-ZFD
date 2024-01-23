import Model, { attr } from '@ember-data/model'

export default class HolidayModel extends Model {
  @attr('number') holiday_types_id
  @attr(Date) start_date
  @attr(Date) end_date
  @attr('string') description
  @attr('boolean') approval_status
}
