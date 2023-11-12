import Component from '@glimmer/component';

export default class GridItemComponent extends Component {
 get itemStyles() {
    return `
      grid-column: ${this.args.columnStart} / span ${this.args.columnSpan};
      grid-row: ${this.args.rowStart} / span ${this.args.rowSpan};
    `;
 }
}