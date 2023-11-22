import Route from '@ember/routing/route';
``;
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;

  @tracked email = '';
  @tracked password = '';

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

  // beforeModel() {
  //   this.session.prohibAuthentication('authenticated.calendar');
  // }

  @action
  async login(email, password) {
    console.log(email, password);
  }
}
