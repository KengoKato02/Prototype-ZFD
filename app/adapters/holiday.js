import RESTAdapter from '@ember-data/adapter/rest';

export default class HolidayAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
}
