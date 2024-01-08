import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class LoginSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      logins: payload,
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
