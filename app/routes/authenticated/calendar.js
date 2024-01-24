import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedCalendarRoute extends Route {
  @service session;
}
