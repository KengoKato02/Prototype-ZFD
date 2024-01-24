import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedCalendarRoute extends Route {
  @service session;
  @service store;

  async model() {
    const holiday = await this.store.findAll('holiday');

    return {
      holiday: holiday,
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('holiday', model.holiday);
  }
}
