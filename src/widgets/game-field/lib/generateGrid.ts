import { Column } from './entities/Column';
import { Tile } from './entities/Tile';

import type { Grid } from '../types';

export type Layout = {
  grid: string[][][];
  rows: number;
  cols: number;
}

type GridData = {
  grid: Grid,
  rows: number;
  cols: number;
  tileMap: Map<string, Tile>;
}

export const generateGrid = (layout: Layout): GridData => {
  const grid: Grid = Array.from({ length: layout.rows }, () =>
    Array(layout.cols).fill(new Column()));

  const tileMap = new Map<string, Tile>();

  for (let y = 0; y < layout.grid.length; y++) {
    const row = layout.grid[y];

    for (let x = 0; x < row.length; x++) {
      const colors = row[x];
      const tiles = colors.map((color, z) => {
        const tile = new Tile(color, y, x, z);
        tileMap.set(tile.id, tile);
        return tile;
      });
      const column = grid[y][x];

      column.addTile(...tiles);
    }

  }

  return {
    grid,
    tileMap,
    rows: layout.rows,
    cols: layout.cols,
  };
};
