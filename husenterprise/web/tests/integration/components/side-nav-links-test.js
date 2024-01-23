import { module, test } from 'qunit';
import { setupRenderingTest } from 'prototype-1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-nav-links', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SideNavLinks />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SideNavLinks>
        template block text
      </SideNavLinks>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
