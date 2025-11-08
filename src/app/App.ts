import { WebGLRenderer } from 'three';

import { MainScene } from '@/pages';
import { Scene, SceneManager } from '@/shared';

type Scenes = {
  main: typeof MainScene;
}

export class App {
  private node!: HTMLElement;

  public scene!: Scene;

  private renderer!: WebGLRenderer;

  private sceneManager = new SceneManager<Scenes>();

  public async init(node: HTMLElement) {
    this.node = node;
    this.renderer = new WebGLRenderer();

    const scenes: Scenes = {
      main: MainScene,
    };

    this.sceneManager.init(scenes, this.renderer, node);
  }

  public create() {
    this.sceneManager.changeScene('main');
  }

  public render() {
    this.node.appendChild(this.renderer.domElement);
  }
}
