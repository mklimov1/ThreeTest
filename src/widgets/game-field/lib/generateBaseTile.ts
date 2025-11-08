import { CylinderGeometry, Mesh, MeshPhongMaterial } from 'three';

const RADIUS = 0.5;
const HEIGHT = 0.1;
const X_STEP = RADIUS * 3.1;
const Z_STEP = RADIUS * 0.9;
const EVENT_OFFSET = RADIUS * 1.55;
const COLOR = '#eeeeee';
const Y_STEP = HEIGHT * 1.5;

export const generateBaseTile =
  (y: number, x: number, z: number = 0): Mesh<CylinderGeometry, MeshPhongMaterial> => {
    const geometry = new CylinderGeometry(RADIUS, RADIUS, HEIGHT, 6);
    geometry.rotateY(Math.PI / 6);

    const material = new MeshPhongMaterial({
      color: COLOR,
      shininess: 50,
      flatShading: true,
    });

    const mesh = new Mesh(geometry, material);

    const offsetX = (y % 2 === 0) ? 0 : EVENT_OFFSET;

    mesh.position.set(
      x * X_STEP + offsetX,
      z * Y_STEP,
      y * Z_STEP,
    );

    return mesh;
  };
