import { module, test } from 'qunit';

import { setupTest } from 'prototype-1/tests/helpers';

module('Unit | Model | holiday', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('holiday', {});
    assert.ok(model);
  });
});
