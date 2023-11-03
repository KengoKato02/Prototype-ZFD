import { module, test } from 'qunit';
import { setupRenderingTest } from 'prototype-1/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | team-calendar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TeamCalendar />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TeamCalendar>
        template block text
      </TeamCalendar>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
