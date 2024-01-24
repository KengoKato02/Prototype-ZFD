import RESTAdapter from '@ember-data/adapter/rest';

export default class EmployeeAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
}
