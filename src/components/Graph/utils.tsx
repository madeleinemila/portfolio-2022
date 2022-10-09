import { ParticleInterface } from "./Particle";

export function generateRandomPos(width: number) {
  return Math.floor(Math.random() * width);
}

export function generateRandomVel() {
  let vel = Math.random() * 2 - 1;
  if (vel < 0.1 && vel > -0.1) {
    vel += 0.5; // filter out really slow velocities
  }
  return vel;
}

export function isAlive(particle: ParticleInterface, sketchHeight: number) {
  if (particle.y < 0 || particle.y > sketchHeight) {
    return false;
  }

  // Also remove particles that are extremely faint
  if (particle.alpha < 40) {
    return false;
  }

  return true;
}
