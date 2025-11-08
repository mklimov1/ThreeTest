import { generateBaseTile } from './generateBaseTile';

import type { Tile } from './entities/Tile';
import type { Mesh } from 'three';

export const generateRenderTile = (tile: Tile): Mesh => {
  const renderTile = generateBaseTile(tile.y, tile.x, tile.z);
  renderTile.material.color.set(tile.color);
  return renderTile;
};
