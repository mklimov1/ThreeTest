import { Column } from './entities/Column';

import type { Grid } from '../types';

export const generateGrid = (rows: number, cols: number): Grid => {
  const grid: Grid = new Map();

  for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {
      const column = new Column(row, col);
      grid.set(`${row}_${col}`, column);
    }
  }

  return grid;
};
