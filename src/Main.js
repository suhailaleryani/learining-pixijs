import { Scroller } from "./DO/Scroller";
import { Application } from 'pixi.js'


class Main {

  static SCROLL_SPEED = 5;

  app = null;
  height = null;
  width = null;
  scroller = null;

  constructor(element) {
    this.height = 385;
    this.width = 512;
    this.app = new Application({ width: this.width, height: this.height, resizeTo: element });
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(this.width, this.height);
    this.app.renderer.backgroundColor = 0x00FFFF;
    element.appendChild(this.app.view);

    this.scroller = new Scroller(this.app.stage)

    window.addEventListener('resize', () => {
      this.height = element.innerHeight;
      this.width = element.innerWidth;
      this.app.renderer.resize(this.width, this.height);
    });

    this.app.ticker.add((delta) => {
      this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    });


  }


}

export { Main }