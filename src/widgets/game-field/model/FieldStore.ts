import EventEmitter from 'eventemitter3';

import { generateGrid, Tile } from '../lib';

import type { Grid, Layout } from '../types';

type Events = {
  addTile: (tiles: Tile[]) => void;
}

export class FieldStore extends EventEmitter<Events> {
  private grid!: Grid;

  private rows: number = 0;

  private cols: number = 0;

  private tileMap!: Map<string, Tile>;

  private tileBar!: Tile[][];

  private colors!: string[];

  init(layout: Layout) {
    const grid = generateGrid(layout.rows, layout.cols);
    this.grid = grid;

    this.rows = layout.rows;
    this.cols = layout.cols;

    this.tileMap = new Map();

    this.colors = layout.colors;
    this.tileBar = [[], [], []];
  }

  addTiles(columnId: string, ...colors: string[]) {
    const column = this.getColumnById(columnId);
    if (!column) return;

    const { row, col } = column;
    const zFrom = column.getTilesLength();

    const tiles = colors.map((color, index) => {
      const tile = new Tile(color, row, col, zFrom + index);
      this.tileMap.set(tile.id, tile);
      return tile;
    });

    column.addTile(...tiles);

    this.emit('addTile', tiles);
  }

  getColumnById(id: string) {
    return this.grid.get(id);
  }

  getColumn(y: number, x: number) {
    return this.grid.get(`${y}_${x}`);
  }

  getTiles(): Tile[] {
    return [...this.tileMap.values()];
  }

  getRows() {
    return this.rows;
  }

  getCols() {
    return this.cols;
  }

  getGrid() {
    return this.grid;
  }

  getColors() {
    return this.colors;
  }

  addToTileBar(index: number, tiles: Tile[]) {
    if (!this.tileBar[index] || this.tileBar[index].length > 0) return;
    this.tileBar[index] = tiles;
  }

  clearTileBar(index: number) {
    if (!this.tileBar[index]) return;
    this.tileBar[index] = [];
  }
}
