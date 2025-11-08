import { WebGLRenderer } from 'three';

import { appEventEmitter } from '../lib';
import { detectBreakpoint } from '../lib/detectBreakpoint';

import type { Scene } from './Scene';
import  type { Size } from '../types/size';

export class SceneManager<T extends Record<string, new () => Scene>> {
  private scenes!: T;

  private renderer!: WebGLRenderer;

  public view!: HTMLCanvasElement;

  private node!: HTMLElement;

  public init(scenes: T, renderer: WebGLRenderer, node: HTMLElement) {
    this.renderer = renderer;
    this.node = node;
    this.scenes = scenes;

    const resize = () => this.resize();

    window.addEventListener('resize', resize);

  }

  public async changeScene(newScene: keyof T) {
    if (!this.renderer || !this.scenes) return;

    const scene = new this.scenes[newScene]();

    await scene.init(this.renderer);
    this.resize();
  }

  private resize() {
    if (!this.node) return;
    const size: Size = {
      width: this.node.clientWidth,
      height: this.node.clientHeight,
    };
    this.renderer.setSize(size.width, size.height);
    appEventEmitter.emit('resize', size, detectBreakpoint(size.width));
  }
}
