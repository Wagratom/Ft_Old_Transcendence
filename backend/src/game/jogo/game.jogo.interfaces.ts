// ### Criar os objetos do nosso game ping pong ###

import { User } from "@prisma/client";
import { randomUUID } from "crypto";


class GWindow {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class GBall {
  positionX: number;
  positionY: number;
  velocity: number;
  directionX: number;
  directionY: number;
  angle: number;
  size: number;
  max_angle: number;
  path: number;

  constructor(velocity: number) {
    this.positionX = 0;
    this.positionY = 0;
    this.velocity = velocity;
    this.directionX = 0;
    this.directionY = 0;
    this.angle = 0;
    this.size = 4;
    this.max_angle = 70;
    this.path = 5;
  }
}

class Paddle {
  positionY: number;
  positionX: number;
  velocity: number;

  width: number;
  height: number;

  constructor(positionX: number, positionY: number, velocity: number, width: number, height: number) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.velocity = velocity;
    this.width = width
    this.height = height;
  }
}

class Player {
  user: User;
  status: boolean;

  constructor() {
    this.status = true;
  }
}

export class GGame {
  player_left: Player;
  player_right: Player;
  placarLeft: number;
  placarRight: number;

  window: GWindow;

  ball: GBall;

  paddleLeft: Paddle;
  paddleRight: Paddle;

  roomID: string;
  winner: string;
  loser:  string;

  gameStatus: boolean;
  pixelIncrement: number;

  constructor(player_left, player_right) {
    this.player_left.user = player_left;
    this.player_right.user = player_right;
    this.window = new GWindow(800, 600);
    this.ball = new GBall(5);
    this.paddleLeft = new Paddle(0, 50, 5, 0, 20);
    this.paddleRight = new Paddle(100, 50, 5, 5, 20);
    this.roomID = randomUUID();
    this.placarLeft = 0;
    this.placarRight = 0;
    this.winner = "";
    this.loser = "";
    this.pixelIncrement = 5;

    this.paddleLeft.width = (this.paddleLeft.width/100) * this.window.width;
    this.paddleLeft.height = (this.paddleLeft.height/100) * this.window.height;
    this.paddleLeft.positionX = (this.paddleLeft.width / 2) ;

    this.paddleRight.width = (this.paddleRight.width/100) * this.window.width;
    this.paddleRight.height = (this.paddleRight.height/100) * this.window.height;
    this.paddleRight.positionX = this.window.width - (this.paddleRight.width / 2);
    
    this.ball.directionX = Math.random() < 0.5 ? -1 : 1;
    this.ball.positionX = this.window.width / 2;
    this.ball.positionY = this.window.height / 2;
    this.ball.size = (this.ball.size / 100) * this.window.height;
  }
}