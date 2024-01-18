import { module, test } from 'qunit';

import { setupTest } from 'prototype-1/tests/helpers';

module('Unit | Adapter | holiday', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:holiday');
    assert.ok(adapter);
  });
});
