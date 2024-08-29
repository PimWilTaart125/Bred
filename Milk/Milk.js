/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Milk extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("milk-a", "./Milk/costumes/milk-a.svg", {
        x: 31.33946982140486,
        y: 62.977000000000004,
      }),
      new Costume("milk-e", "./Milk/costumes/milk-e.svg", { x: 35, y: 45 }),
    ];

    this.sounds = [new Sound("glug", "./Milk/sounds/glug.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
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
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 30) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 50) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 110) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.lullollul = 0;
    this.restartTimer();
    while (true) {
      if (this.compare(this.timer, 10) > 0) {
        this.createClone();
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
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
    this.stage.vars.lullollul = 5;
    /* TODO: Implement stop all */ null;
  }

  *startAsClone2() {
    while (true) {
      if (this.toNumber(this.stage.vars.lullollul) === 5) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *calculateWithToEnKomUitOp(nummer1, bewerkingsteken, nummer2, uitkomst) {
    this.stage.vars.uitkomst = "";
    if (this.toString(bewerkingsteken) === "x") {
      if (!(0 === this.toNumber(nummer2))) {
        this.stage.vars.uitkomst =
          this.toNumber(nummer1) * this.toNumber(nummer2);
      }
    }
    if (this.toString(bewerkingsteken) === "+") {
      this.stage.vars.uitkomst =
        this.toNumber(nummer1) + this.toNumber(nummer2);
    }
    if (this.toString(bewerkingsteken) === "-") {
      this.stage.vars.uitkomst =
        this.toNumber(nummer1) - this.toNumber(nummer2);
    }
    if (this.toString(bewerkingsteken) === ":") {
      this.stage.vars.uitkomst =
        this.toNumber(nummer1) / this.toNumber(nummer2);
    }
    if (this.toString(bewerkingsteken) === "%") {
      this.stage.vars.uitkomst =
        (this.toNumber(nummer1) / 100) * this.toNumber(nummer2);
    }
    if (
      "x" === this.toString(bewerkingsteken) &&
      this.toNumber(nummer2) === 0
    ) {
      this.stage.vars.uitkomst =
        this.toNumber(uitkomst) / this.toNumber(nummer1);
    }
  }

  *whenIReceiveWinningeBrood() {
    this.visible = false;
  }
}
