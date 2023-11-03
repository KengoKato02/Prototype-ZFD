import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SideNavComponent extends Component {
  @tracked isOpen = false;

  @action
  toggleProfileDropDown() {
    this.isOpen = !this.isOpen;
  }
}
