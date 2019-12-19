import { TilingSprite, Texture } from "pixi.js";
import backFar from '../assets/images/game/bg-far.png';

class Far extends TilingSprite {

  static DELTA_X = 0.128

  constructor() {
    const farTexture = Texture.from(backFar);
    super(farTexture, 512, 256);
    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
  }

  setViewportX = (newViewportX) => {
    const distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
  };
}

export { Far };