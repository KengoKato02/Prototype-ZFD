import JSONAPISerializer from '@ember-data/serializer/json-api'

export default class HolidaySerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = payload.data.map((holiday) => {
      holiday.attributes.start_date = new Date(holiday.attributes.start_date)
      holiday.attributes.end_date = new Date(holiday.attributes.end_date)
      return holiday
    })

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    )
  }
}
