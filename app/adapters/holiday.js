import ApplicationAdapter from './application';
import getApiEndpoint from './get-apiconfig';

export default class HolidayAdapter extends ApplicationAdapter {
  host = getApiEndpoint();
}
