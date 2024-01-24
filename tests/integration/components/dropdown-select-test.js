import { module, test } from 'qunit';
import { setupRenderingTest } from 'prototype-1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dropdown-select', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DropdownSelect />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DropdownSelect>
        template block text
      </DropdownSelect>
    `);

    assert.dom().hasText('template block text');
  });
});
