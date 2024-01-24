import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeeService extends Service {
  @service store;
  @service session;
  @service router;

  @tracked employees = [
    {
      first_name: 'Oleg',
      last_name: '',
      team: 'Dolphins',
      role: 'Architect',
    },
    {
      first_name: 'Saugat',
      last_name: '',
      team: 'Dolphins',
      role: 'Manager',
    },
    {
      first_name: 'Ken',
      last_name: '',
      team: 'Dolphins',
      role: 'Developer',
    },
    {
      first_name: 'Saugat',
      last_name: '',
      team: 'Dolphins',
      role: 'Manager',
    },
  ];

  @action
  addEmployee(input) {
    this.employees.push(input);
    console.log(this.employees);
  }

  async getEmployees() {
    try {
      const response = await this.store.findAll('employee');
      return response;
    } catch (error) {
      console.error('Error fetching employees:', error);
      return error;
    }
  }
}
