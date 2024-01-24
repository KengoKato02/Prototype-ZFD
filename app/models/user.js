import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;
  @attr('string') name;
  @attr('string') dob;
  @attr('string') department;
  @attr('string') position;
  @hasMany('holiday') holidays;
  @hasMany('employee') employees;
}
