import { Column, generateGrid, Tile } from '../lib';

import type { Layout } from '../lib/generateGrid';
import type { Grid } from '../types';

export class Store {
  private grid: Grid = [];

  private rows: number = 0;

  private cols: number = 0;

  private tileMap!: Map<string, Tile>;

  init(layout: Layout) {
    const { cols, rows, grid, tileMap } = generateGrid(layout);
    this.rows = rows;
    this.cols = cols;
    this.grid = grid;
    this.tileMap = tileMap;
  }

  getColumn(y: number, x: number): Column {
    return this.grid[y][x];
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
}
