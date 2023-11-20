import { module, test } from 'qunit';
import { setupTest } from 'prototype-1/tests/helpers';

module('Unit | Route | authenticated/profile', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authenticated/profile');
    assert.ok(route);
  });
});
