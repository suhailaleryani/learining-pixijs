import { Far } from "./Far"
import { Mid } from "./Mid";


class Scroller {

  constructor(stage) {
    this.far = new Far();
    stage.addChild(this.far);

    this.mid = new Mid();
    stage.addChild(this.mid);

    this.viewportX = 0;
  }


  setViewportX = (viewportX) => {
    this.viewportX = viewportX;
    this.far.setViewportX(viewportX);
    this.mid.setViewportX(viewportX);
  }

  getViewportX = () => {
    return this.viewportX;
  };

  moveViewportXBy = (units) => {
    const newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
  };


}

export { Scroller }