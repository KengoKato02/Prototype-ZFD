import RESTSerializer from '@ember-data/serializer/rest';

export default class HolidaySerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      holidays: payload,
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
