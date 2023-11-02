import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SideNavComponent extends Component {
  @tracked isProfileOpen = false;

  @action
  toggleProfileDropDown() {
    this.isProfileDropDown = !this.isProfileDropDown;
    // console.log(this.isProfileDropDown)
  }
}
