import Component from '@glimmer/component';

export default class CalendarEventsComponent extends Component {
  employeeGridMap(index) {
    if (index === 0) {
      return 'grid-row: 1 / span 22';
    } else if (index === 1) {
      return 'grid-row: 22 / span 52';
    } else if (index === 2) {
      return 'grid-row: 85 / span 52';
    } else if (index === 3) {
      return 'grid-row: 140 / span 52';
    } else if (index === 4) {
      return 'grid-row: 190 / span 52';
    } else {
      return;
    }
  }
}
