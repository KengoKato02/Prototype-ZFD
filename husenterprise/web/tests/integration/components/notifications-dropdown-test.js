import { module, test } from 'qunit';
import { setupRenderingTest } from 'prototype-1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | notifications-dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NotificationsDropdown />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NotificationsDropdown>
        template block text
      </NotificationsDropdown>
    `);

    assert.dom().hasText('template block text');
  });
});
