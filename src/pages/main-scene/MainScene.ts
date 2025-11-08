import { BoxGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera } from 'three';

import { appEventEmitter, Scene, type Size } from '@/shared';

export class MainScene extends Scene {
  private camera!: PerspectiveCamera;

  private createCube() {
    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new Mesh( geometry, material );

    return cube;
  }

  protected create() {
    this.camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    const cube = this.createCube();
    this.camera.position.z = 5;

    this.scene.background = new Color('#b8b8b8');

    this.scene.add(this.camera, cube);
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
