import { Tile } from './Tile';

export class Column {
  private tiles: Tile[];

  constructor() {
    this.tiles = [];
  }

  addTile(...tiles: Tile[]) {
    this.tiles.push(...tiles);
  }

  getTopTile(): Tile | undefined {
    return this.tiles?.[this.tiles.length - 1];
  }
}
