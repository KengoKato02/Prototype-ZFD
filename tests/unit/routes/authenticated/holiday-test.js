import { module, test } from 'qunit';
import { setupTest } from 'prototype-1/tests/helpers';

module('Unit | Route | authenticated/holiday', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authenticated/holiday');
    assert.ok(route);
  });
});
