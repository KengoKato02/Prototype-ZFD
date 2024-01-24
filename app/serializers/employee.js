import RESTSerializer from '@ember-data/serializer/rest';

export default class EmployeeSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      employees: payload,
    };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
