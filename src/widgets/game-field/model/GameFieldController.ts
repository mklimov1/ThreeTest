import { FieldStore } from './FieldStore';
import { FieldScene } from '../ui/FieldScene';

import type { Tile } from '../lib';
import type { Layout } from '../types';

export class GameFieldController {
  private fieldStore: FieldStore;

  public scene: FieldScene;

  constructor(layout: Layout) {
    this.fieldStore = new FieldStore();
    this.scene = new FieldScene();

    this.setup(layout);
  }

  private setup(layout: Layout) {
    this.fieldStore.init(layout);

    this.scene.init(layout.rows, layout.cols);

    this.subscribeEvents();

    this.fieldStore.fillByLayout(layout);
  }

  private addTile(tiles: Tile[]) {
    this.scene.addTiles(...tiles);
  }

  private subscribeEvents() {
    this.fieldStore.on('addTile', this.addTile, this);
  }
}
