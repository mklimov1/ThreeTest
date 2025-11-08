import { generateBaseTile } from './generateBaseTile';

import type { Mesh } from 'three';

export function generateBase(rows: number, cols: number): Mesh[] {
  const bases: Mesh[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const mesh = generateBaseTile(row, col, -1);
      bases.push(mesh);
    }
  }

  return bases;
}
