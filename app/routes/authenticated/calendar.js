import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthenticatedCalendarRoute extends Route {
  @service session;
  @service store;

  async model() {
    const holiday = await this.store.findAll('holiday');
    const employee = await this.store.findAll('employee');

    return {
      holiday: holiday,
      employee: employee,
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('holiday', model.holiday);
    controller.set('employee', model.employee);

    controller.set('addEmployee', this.addEmployee.bind(this));
    controller.set('addHoliday', this.addHoliday.bind(this));
  }

  // @action
  // async addEmployee(input) {
  //   const newEmployee = this.store.createRecord('employee', {
  //     team_id: parseInt(input.team_id),
  //     name: input.name,
  //     role: input.role,
  //   });

  //   console.log(newEmployee);

  //   await newEmployee.save();
  // }

  @action
  async addEmployee(input) {
    console.log(JSON.stringify(input));
    try {
      const response = await fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding holiday:', error);
      throw error;
    }
  }

  // @action
  // async addHoliday(input) {
  //   const newHoliday = this.store.createRecord('holiday', {
  //     start_date: input.start_date,
  //     end_date: input.end_date,
  //     description: input.description,
  //     employee_id: parseInt(input.employee_id),
  //   });

  //   await newHoliday.save();
  // }

  @action
  async addHoliday(input) {
    console.log(input);
    try {
      const response = await fetch('http://localhost:3000/holidays', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding holiday:', error);
      throw error;
    }
  }
}
