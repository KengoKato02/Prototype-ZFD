import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedColleaguesRoute extends Route {
  @service session;
}
