import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('number') team_id;
  @attr('string') name;
  @attr('string') role;
}
