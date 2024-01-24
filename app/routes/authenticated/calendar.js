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
  }

  @action
  async addEmployee(input) {
    const newEmployee = this.store.createRecord('employee', {
      team_id: parseInt(input.team_id),
      name: input.name,
      role: input.role,
    });

    console.log(newEmployee);

    await newEmployee.save();
  }
}
