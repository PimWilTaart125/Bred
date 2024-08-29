/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Sprite1/costumes/uiterlijk1.svg", {
        x: 48,
        y: 50,
      }),
      new Costume("uiterlijk2", "./Sprite1/costumes/uiterlijk2.svg", {
        x: 46,
        y: 53,
      }),
    ];

    this.sounds = [
      new Sound("Miauw", "./Sprite1/sounds/Miauw.wav"),
      new Sound("Ya", "./Sprite1/sounds/Ya.wav"),
      new Sound("Cheer", "./Sprite1/sounds/Cheer.wav"),
      new Sound("Boop Bing Bop", "./Sprite1/sounds/Boop Bing Bop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamell Oveaeur" },
        this.whenIReceiveGamellOveaeur
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Winninge brood" },
        this.whenIReceiveWinningeBrood
      ),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.x, this.mouse.y);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.score = 0;
    while (true) {
      if (this.touching(this.sprites["Milk"].andClones())) {
        this.stage.vars.score--;
        yield* this.startSound("Ya");
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("edge")) {
        while (!!this.touching("edge")) {
          this.y -= 1;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.goto(-158, 3);
    this.stage.watchers.score.visible = true;
    this.visible = true;
    while (true) {
      yield* this.wait(1);
      if (this.toNumber(this.stage.vars.score) === 10) {
        this.broadcast("Winninge brood");
        this.goto(1, 36);
      } else {
        if (this.toNumber(this.stage.vars.score) === 0) {
          this.broadcast("Gamell Oveaeur");
        }
      }
      yield;
    }
  }

  *whenIReceiveGamellOveaeur() {
    this.visible = false;
  }

  *whenIReceiveWinningeBrood() {
    yield* this.startSound("Boop Bing Bop");
  }
}
