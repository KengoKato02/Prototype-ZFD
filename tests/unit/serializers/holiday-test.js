import { module, test } from 'qunit';

import { setupTest } from 'prototype-1/tests/helpers';

module('Unit | Serializer | holiday', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('holiday');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('holiday', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
