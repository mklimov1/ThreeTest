export class App {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private node!: HTMLElement;

  public async init(node: HTMLElement) {
    this.node = node;
  }

  public create() {
  }

  public render() {
    // this.node.appendChild(this.app.canvas);
  }
}
