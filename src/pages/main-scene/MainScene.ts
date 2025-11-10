import { AmbientLight, Color, DirectionalLight, PerspectiveCamera, Vector3 } from 'three';

import { appEventEmitter, Scene, type Size } from '@/shared';
import { GameFieldController } from '@/widgets';

export class MainScene extends Scene {
  private camera!: PerspectiveCamera;

  private field!: GameFieldController;

  private async createField() {
    const response = await fetch('/layout.json');
    const layout = await response.json();

    this.field = new GameFieldController(layout);

    this.field.scene.position.z = -3;
  }

  protected async create() {
    this.camera = new PerspectiveCamera(75, 1, 0.1, 1000);

    this.camera.position.y = 5;
    this.camera.position.z = 5;
    this.camera.lookAt(new Vector3(0, 0, 0));

    this.scene.background = new Color('#c0fdf8');

    await this.createField();

    const light = new AmbientLight(0xffffff, 0.8);

    const dir = new DirectionalLight(0xffffff, 1);
    dir.position.set(3, 6, 2);

    this.scene.add(this.camera, this.field.scene, light, dir);
  }

  load() {}

  unsubscribeEvents() {
    appEventEmitter.off('resize', this.resize);
    this.renderer.setAnimationLoop(null);
  }

  private resize(size: Size) {
    this.camera.aspect = size.width / size.height;
    this.camera.updateProjectionMatrix();
  }

  subscribeEvents() {
    appEventEmitter.on('resize', this.resize, this);
    this.renderer.setAnimationLoop(() => {
      this.renderer.render(this.scene, this.camera);
    });
  }

  show(){}
}
