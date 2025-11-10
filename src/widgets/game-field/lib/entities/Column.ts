import { Tile } from './Tile';

export class Column {
  private tiles: Tile[];

  public readonly col: number;

  public readonly row: number;

  constructor(row: number, col: number) {
    this.tiles = [];
    this.row = row;
    this.col = col;
  }

  addTile(...tiles: Tile[]) {
    this.tiles.push(...tiles);
  }

  getTopTile(): Tile | undefined {
    return this.tiles?.[this.tiles.length - 1];
  }

  getTilesLength() {
    return this.tiles.length;
  }
}
