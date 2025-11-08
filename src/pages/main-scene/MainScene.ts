import { PerspectiveCamera } from 'three';

import { appEventEmitter, Scene, type Size } from '@/shared';

export class MainScene extends Scene {
  private camera!: PerspectiveCamera;

  protected create() {
    this.camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    this.scene.add(this.camera);
  }

  load() {}

  unsubscribeEvents() {
    appEventEmitter.off('resize', this.resize);
    this.renderer.setAnimationLoop(null);
  }

  private resize(size: Size) {
    this.camera.aspect = size.width / size.height;
  }

  subscribeEvents() {
    appEventEmitter.on('resize', this.resize, this);
    this.renderer.setAnimationLoop(() => {
      this.renderer.render(this.scene, this.camera);
    });
  }

  show(){}
}
