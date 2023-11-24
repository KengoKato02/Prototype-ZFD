import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EmployeesService extends Service {
  @tracked employees = [
    {
      first_name: 'Oleg',
      last_name: 'Marcnuks',
      team: 'Dolphins',
      role: 'Architect',
    },
    {
      first_name: 'Saugat',
      last_name: 'Maharjan',
      team: 'Dolphins',
      role: 'Manager',
    },
    {
      first_name: 'Ken',
      last_name: 'Kato',
      team: 'Dolphins',
      role: 'Developer',
    },
  ];

  @action
  addEmployee(input) {
    this.employees.push(input);
    this.employees= this.employees;
    console.log(this.employees);
  }
}
