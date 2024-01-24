import RESTSerializer from '@ember-data/serializer/rest';

export default class EmployeeSerializer extends RESTSerializer {
 normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  payload = {
    employees: payload,
  };
  console.log();
  return super.normalizeResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  );
}
}
