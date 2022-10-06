import p5 from "p5";

export interface ParticleInterface {
  x: number;
  y: number;
  size: number;
  vel: number;
  alpha: number;
  draw: (sketch: p5) => void;
}

export class Particle implements ParticleInterface {
  x: number;
  y: number;
  size: number;
  vel: number;
  alpha: number = 255;

  constructor(x: number, y: number, size: number, vel: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vel = vel;
  }

  draw(sketch: p5) {
    sketch.noStroke();
    sketch.fill(255, this.alpha);
    sketch.ellipse(this.x, this.y, this.size, this.size);
  }
}
