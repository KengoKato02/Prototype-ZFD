import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class SidePanelComponent extends Component {
  @service employee;

  @tracked isDropdownOpen = false;

  @tracked input = {
    team_id: 1,
    name: '',
    role: '',
  };

  teamList = [
    {
      id: 1,
      name: 'Copenhagen',
    },
    {
      id: 2,
      name: 'Aarhus',
    },
    {
      id: 3,
      name: 'Odense',
    },
  ];

  @action
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
