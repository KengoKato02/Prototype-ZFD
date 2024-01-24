import { module, test } from 'qunit';
import { setupRenderingTest } from 'prototype-1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | calendar/employees', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Calendar::Employees />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Calendar::Employees>
        template block text
      </Calendar::Employees>
    `);

    assert.dom().hasText('template block text');
  });
});
