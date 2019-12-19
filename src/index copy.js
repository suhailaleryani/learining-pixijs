import * as PIXI from 'pixi.js'
import './assets/css/style.css'

const pixiSelector = "pixiSelector";

let height = window.innerHeight;
let width = window.innerWidth;

const app = new PIXI.Application({ width: width, height: height, resizeTo: window });
app.renderer.autoResize = true;
app.renderer.resize(width, height);
document.body.appendChild(app.view);

window.addEventListener('resize', () => {
  height = window.innerHeight;
  width = window.innerWidth;
  app.renderer.resize(width, height);
})

app.renderer.backgroundColor = 0x00FFFF;

const center = new PIXI.Graphics();
center.beginFill(0xDE3249);
center.drawRect(0, 0, 10, 10);
center.endFill();
center.position = new PIXI.Point(width / 2, height / 2);
app.stage.addChild(center);

// const container = new PIXI.Container();
// app.stage.addChild(container);


const numberOfPips = 0;
let pips = [];
for (let i = 0; i < numberOfPips; i++) {
  const pip = new PIXI.Graphics();
  pips.push(pip);
  pip.beginFill(0x0000ff);
  pip.drawCircle(0, 0, 5);
  pip.drawRect(-5, 0, 10, 100);
  // pip.pivot.x = 20;
  // pip.pivot.y = 10;
  pip.position = new PIXI.Point(width / 2, height / 2);
  pip.endFill();
  // container.addChild(pip);
  app.stage.addChild(pip);
}


const graphics = new PIXI.Graphics();
graphics.beginFill(0xDE3249);
graphics.drawRect(10, 10, 50, 50);
graphics.endFill();
// app.stage.addChild(graphics);


let delta = 0;
setInterval(() => {
  delta += 0.03;
  // graphics.x = 300 + Math.sin(delta) * 100;
  // graphics.y = 300 + Math.cos(delta) * 100;
  graphics.width = 75 + Math.sin(delta) * 25;
  graphics.height = 75 + Math.sin(delta) * 25;
  // container.position = new PIXI.Point(width / 2 + Math.sin(delta) * 100, height / 2 + Math.cos(delta) * 100);

}, 10);

app.ticker.add((delta) => {
  center.position = new PIXI.Point(width / 2, height / 2);


  for (let i = 0; i < numberOfPips; i++) {
    if (pips[i])
      pips[i].rotation -= ((i + 1) / 100) * delta;
  }
});
















