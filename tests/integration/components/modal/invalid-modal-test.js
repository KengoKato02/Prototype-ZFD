import { module, test } from 'qunit';
import { setupRenderingTest } from 'prototype-1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modal/invalid-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Modal::InvalidModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Modal::InvalidModal>
        template block text
      </Modal::InvalidModal>
    `);

    assert.dom().hasText('template block text');
  });
});
