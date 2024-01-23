import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { service } from '@ember/service'

export default class SidePanelComponent extends Component {
  @service employee

  @tracked input = {
    first_name: '',
    last_name: '',
    team: '',
    role: '',
  }
}
