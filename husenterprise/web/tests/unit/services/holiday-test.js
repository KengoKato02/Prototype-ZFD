import { module, test } from 'qunit';
import { setupTest } from 'prototype-1/tests/helpers';

module('Unit | Service | holiday', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:holiday');
    assert.ok(service);
  });
});
