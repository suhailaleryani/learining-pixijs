import { Scroller } from "./DO/Scroller";
import { Application, Loader } from 'pixi.js';
import * as PIXI from 'pixi.js';
import WallJson from './assets/json/wall.json';


class Main {

  static SCROLL_SPEED = 5;

  app = null;
  height = null;
  width = null;
  scroller = null;

  get stage() {
    return this.app.stage;
  }

  get renderer() {
    return this.app.renderer;
  }

  constructor(element) {
    this.height = 385;
    this.width = 512;
    this.app = new Application({ width: this.width, height: this.height, resizeTo: element });
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(this.width, this.height);
    this.app.renderer.backgroundColor = 0x00FFFF;
    element.appendChild(this.app.view);


    window.addEventListener('resize', () => {
      this.height = element.innerHeight;
      this.width = element.innerWidth;
      this.app.renderer.resize(this.width, this.height);
    });

    this.loadSpriteSheet();

  }

  loadSpriteSheet = () => {
    const loader = new PIXI.Loader(); // you can also create your own if you want

    const sprites = {};

    // Chainable `add` to enqueue a resource
    loader.add('wall', WallJson)
      .on("complete", this.spriteSheetLoaded)
      .load((loader, resources) => {
        console.log(resources)
        // resources is an object where the key is the name of the resource loaded and the value is the resource object.
        // They have a couple default properties:
        // - `url`: The URL that the resource was loaded from
        // - `error`: The error that happened when trying to load (if any)
        // - `data`: The raw data that was loaded
        // also may contain other properties based on the middleware that runs.
        sprites.bunny = new PIXI.TilingSprite(resources.bunny.texture);
        sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
        sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
      });
  };

  spriteSheetLoaded = () => {
    this.start();
  }

  start() {
    this.scroller = new Scroller(this.stage)
    this.app.ticker.add((delta) => {
      this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    });

    var slice1 = PIXI.Sprite.from("edge_01");
    console.log(slice1)
    slice1.position.x = 32;
    slice1.position.y = 64;
    this.stage.addChild(slice1);
  }


}

export { Main }