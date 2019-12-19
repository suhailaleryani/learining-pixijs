import { TilingSprite, Texture } from "pixi.js";
import backMid from '../assets/images/bg-mid.png';

class Mid extends TilingSprite {

  static DELTA_X = 0.64

  constructor() {
    const midTexture = Texture.from(backMid);
    super(midTexture, 512, 256);
    this.position.x = 0;
    this.position.y = 128;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;

  }

  setViewportX = (newViewportX) => {
    const distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X);
  };

}

export { Mid };