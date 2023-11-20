import Route from '@ember/routing/route';
``;
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class LoginRoute extends Route {
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

  @action
  login(email, password) {
    console.log(email);
    console.log(password);
  }
}