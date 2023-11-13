import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class SideNavComponent extends Component {
  @service router;
  
  @tracked isOpen = false;

  @action
  toggleProfileDropDown() {
    this.isOpen = !this.isOpen;
  }

  // get pageTitle() {
  //   // Access the current route's page-title property
  //   console.log(this.router.currentRoute.pageTitle)
  //   return this.router.currentRoute.pageTitle || 'Default Page Title';
  // }
}
