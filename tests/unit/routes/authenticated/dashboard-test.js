// tests/unit/components/stats-wrapper-test.js
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | stats-wrapper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties or actions on the owner context if needed

    // Render the component
    await render(hbs`<StatsWrapper />`);

    // Assertion for the existence of the component or its content
    assert.dom('.flex').exists();
    assert.dom('.h-32').exists();
    assert.dom('.rounded-full').exists();
    assert.dom('.bg-gray-200').exists();
    assert.dom('.w-32').exists();
    assert.dom('.h-32').exists();
    assert.dom('.text-2xl').exists();
    assert.dom('.font-bold').exists();
    assert.dom('.text-gray-700').exists();
    assert.dom('.text-center').exists();
    assert.dom('.mt-4').exists();
    assert.dom('.text-sm').exists();
    assert.dom('.text-gray-500').exists();
    assert.dom('.text-center').exists();
    // Add more assertions based on your component structure

    // Example: Assert the text content of an element
    assert.dom('.text-2xl').hasText('Oleg Marcenuks');
    assert.dom('.text-lg').hasText('IT Department');

    // Add more specific assertions based on your component structure
    assert
      .dom('.text-gray-900')
      .includesText('Remaining Emergency Leave Total: 7 Used: 3 Left: 4');
    assert
      .dom('.text-gray-900')
      .includesText('Used Holidays You have no previous holidays yet');
    assert
      .dom('.text-gray-900')
      .includesText('Your Holiday Schedule Start by booking a holiday to see');
  });
});
