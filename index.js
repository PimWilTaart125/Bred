import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Milk from "./Milk/Milk.js";
import Apple from "./Apple/Apple.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Sprite1: new Sprite1({
    x: -158,
    y: -19,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 3,
  }),
  Milk: new Milk({
    x: 106.39,
    y: -163,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 1,
  }),
  Apple: new Apple({
    x: 106.39,
    y: -127,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 2,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 60, // Set to 60 to make your project run faster
});
export default project;
