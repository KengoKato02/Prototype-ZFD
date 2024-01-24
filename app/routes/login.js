import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;
  @service router;

  @tracked email = '';
  @tracked password = '';

  beforeModel() {
    this.session.setup();
    this.session.prohibitAuthentication('authenticated.calendar');
  }

  async model() {
    return {};
  }

  @action
  async login(email, password) {
    try {
      await this.session.authenticate('authenticator:token', {
        email,
        password,
      });
      this.router.transitionTo('authenticated.calendar');
    } catch (error) {
      console.log(error);
    }
  }

  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.set('email', '');
    controller.set('password', '');

    controller.setEmail = (email) => {
      controller.set('email', email);
    };

    controller.setPassword = (password) => {
      controller.set('password', password);
    };

    controller.set('login', this.login.bind(this));
  }
}
