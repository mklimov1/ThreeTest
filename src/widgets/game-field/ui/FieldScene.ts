import { Group } from 'three';

import { generateBase } from '../lib/generateBase';
import { generateRenderTile } from '../lib/generateRenderTile';

import type { Tile } from '../lib';

export class FieldScene extends Group {
  private rows!: number;

  private cols!: number;

  private wrapper!: Group;

  public init(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;

    this.wrapper = new Group();
    this.add(this.wrapper);
    this.addBases();
  }

  private addBases() {
    const bases = generateBase(this.rows, this.cols);
    const rightmostBase = this.rows > 1 ? bases[this.cols * 2 - 1] : bases[this.cols - 1];

    this.wrapper.position.y = (bases[0].position.y + bases[bases.length - 1].position.y) / 2;
    this.wrapper.position.x = (bases[0].position.x - rightmostBase.position.x) / 2;

    this.wrapper.add(...bases);
  }

  public addTiles(...tiles: Tile[]) {
    const renderTiles = tiles.map(tile => {
      const renderTile = generateRenderTile(tile);
      return renderTile;
    });

    this.wrapper.add(...renderTiles);
  }
}
