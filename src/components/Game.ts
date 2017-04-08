import * as Phaser from "phaser-ce";

export class Game {

  game: any;

  constructor() {
      this.game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
        preload: this.preload,
        create: this.create,
        update: this.update
      });
  }

  private preload() {

  }

  private create() {

  }

  private update() {

  }

}
