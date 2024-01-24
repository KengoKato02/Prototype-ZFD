import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedHolidayRoute extends Route {
  @service session;
}
