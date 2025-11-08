import { Group } from 'three';

import { generateBase } from '../lib/generateBase';
import { generateRenderTile } from '../lib/generateRenderTile';

import type { Tile } from '../lib';

export class Field extends Group {
  private rows!: number;

  private cols!: number;

  public init(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;

    const bases = generateBase(this.rows, this.cols);

    this.add(...bases);
  }

  public create(...tiles: Tile[]) {
    const renderTiles = this.fill(...tiles);

    this.add(...renderTiles);
  }

  private fill(...tiles: Tile[]) {
    const renderTiles = tiles.map(tile => {
      const renderTile = generateRenderTile(tile);
      return renderTile;
    });

    return renderTiles;
  }
}
