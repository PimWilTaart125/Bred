/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blue Sky 2 ", "./Stage/costumes/Blue Sky 2 .svg", {
        x: 240,
        y: 180,
      }),
      new Costume("Rays", "./Stage/costumes/Rays.svg", { x: 360, y: 270 }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 213.57686444887537,
        y: 158.836547235589,
      }),
    ];

    this.sounds = [new Sound("plop", "./Stage/sounds/plop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamell Oveaeur" },
        this.whenIReceiveGamellOveaeur
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Winninge brood" },
        this.whenIReceiveWinningeBrood
      ),
    ];

    this.vars.lullollul = 5;
    this.vars.score = 0;
    this.vars.uitkomst = 4.45;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: false,
      value: () => this.vars.score,
      x: 448,
      y: 180,
    });
  }

  *whenIReceiveGamellOveaeur() {
    this.costume = "Rays";
    this.watchers.score.visible = false;
  }

  *whenGreenFlagClicked() {
    this.vars.score = 3;
    this.costume = "Blue Sky 2 ";
  }

  *whenIReceiveWinningeBrood() {
    this.costume = "backdrop1";
    /* TODO: Implement stop all */ null;
  }
}
