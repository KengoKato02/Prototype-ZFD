import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedDashboardRoute extends Route {
  @service session;
}
