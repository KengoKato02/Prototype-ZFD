import RESTSerializer from '@ember-data/serializer/rest';

export default class HolidaySerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      holidays: payload,
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
