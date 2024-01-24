import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedSignUpRoute extends Route {
  @service session;
}
