import { Scene as ThreeScene, WebGLRenderer } from 'three';

export abstract class Scene {
  public scene!: ThreeScene;

  protected renderer!: WebGLRenderer;

  protected abstract load(): void;

  protected abstract create(): void;

  async init(renderer: WebGLRenderer) {
    await this.load();
    this.renderer = renderer;
    this.scene = new ThreeScene();
    this.create();
    this.subscribeEvents();
    this.show();
  }

  protected abstract unsubscribeEvents(): void;

  protected abstract subscribeEvents(): void;

  protected abstract show(): void;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected finishScene(_payload?: unknown) {
    this.destroy();
  }

  protected destroy() {
    this.unsubscribeEvents();
  }
}
