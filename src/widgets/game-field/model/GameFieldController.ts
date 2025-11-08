import { Store } from './Store';
import { Field } from '../ui/Field';

import type { Layout } from '../lib/generateGrid';

export class GameFieldController {
  private store: Store;

  public view: Field;

  constructor(layout: Layout) {
    this.store = new Store();
    this.store.init(layout);

    this.view = new Field();
    this.view.init(layout.rows, layout.cols);
    this.view.create(...this.store.getTiles());
  }
}
