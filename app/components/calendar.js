
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DynamicCalendarComponent extends Component {
  @tracked events = [
    { title: 'Breakfast', date: '2022-01-12T06:00', colStart: 3, gridRow: 2, span: 1 },

  ];
  @tracked isAddEventModalOpen = false;
  @tracked newEvent = { title: '', colStart: 1, gridRow: 1, span: 1 };

  @action
  showAddEventModal() {
    this.isAddEventModalOpen = true;
  }

  @action
  closeAddEventModal() {
    this.isAddEventModalOpen = false;
  }

  @action
  addEvent() {
    // Create a new event with the properties from newEvent
    const newEventObject = {
      title: this.newEvent.title,
      colStart: this.newEvent.colStart,
      gridRow: this.newEvent.gridRow,
      span: this.newEvent.span,
      date: '2023-11-15', 
    };

    // Push or spread the new event into the events array
    this.events = [...this.events, newEventObject];

    this.closeAddEventModal();

    // Reset newEvent to default values for the next entry
    this.newEvent = { title: '', colStart: 1, gridRow: 1, span: 1 };
  }

  @action
  updateNewEventProperty(property, event) {
    // Use event.target.value to get the input value
    if (property === 'title') {
      this.newEvent.title = event.target.value;
    } else if (property === 'colStart') {
      this.newEvent.colStart = event.target.value;
    } else if (property === 'gridRow') {
      this.newEvent.gridRow = event.target.value;
    } else if (property === 'span') {
      this.newEvent.span = event.target.value;
    }
  }

}


