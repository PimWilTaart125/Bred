/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 }),
    ];

    this.sounds = [
      new Sound("Chomp", "./Apple/sounds/Chomp.wav"),
      new Sound("Cheer", "./Apple/sounds/Cheer.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamell Oveaeur" },
        this.whenIReceiveGamellOveaeur
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Winninge brood" },
        this.whenIReceiveWinningeBrood
      ),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(230, this.random(171, -171));
      this.visible = true;
      yield* this.wait(0.1);
      yield* this.glide(1, -240, this.y);
      this.direction = 0;
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.score++;
        yield* this.startSound("Cheer");
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 30) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 50) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 10) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 110) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *startAsClone() {
    while (true) {
      this.goto(230, this.random(171, -171));
      yield* this.glide(1, -240, this.y);
      this.direction = 0;
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.createClone();
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveGamellOveaeur() {
    this.visible = false;
  }

  *startAsClone2() {
    while (true) {
      if (this.toNumber(this.stage.vars.lullollul) === 5) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveWinningeBrood() {
    this.visible = false;
  }
}
