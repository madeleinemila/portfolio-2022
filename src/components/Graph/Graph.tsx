import { useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import p5 from "p5"; /* Imported for types only */
import {
  GRAPH_BREAKPOINT,
  DELTAS,
  DELTAS_SMALL,
  INIT_NUM_PARTICLES,
  MAX_PARTICLES,
  SEEDS,
  SKETCH_HEIGHT,
  SKETCH_HEIGHT_SMALL,
  Y_LOWER_SPACE,
  Y_LOWER_SPACE_SMALL,
  Y_UPPER_SPACE,
  Y_UPPER_SPACE_SMALL,
} from "../constants";
import { Particle } from "./Particle";
import { generateRandomPos, generateRandomVel, isAlive } from "./utils";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  /* Only import client-side since the window object must be present first */
  ssr: false,
});

const particles = new Array(INIT_NUM_PARTICLES);

const Graph = (): JSX.Element => {
  // Init refs we'll use for layout (for horizontal axis position and how to augment the graph lines)
  const deltasRef = useRef(DELTAS);
  const yUpperRef = useRef(Y_UPPER_SPACE);
  const yLowerRef = useRef(Y_LOWER_SPACE);

  // **** Helper methods ****

  const graphInit = useCallback((sketch: p5) => {
    sketch.noFill();
    sketch.stroke(255, 120);
    sketch.strokeWeight(1);
  }, []);

  const makeNParticles = useCallback((numParticles: number, sketchWidth: number) => {
    for (let i = 0; i < numParticles; i++) {
      if (particles.length > MAX_PARTICLES) return;
      const pos = generateRandomPos(sketchWidth);
      const vel = generateRandomVel();
      particles.push(new Particle(pos, yUpperRef.current, Math.abs(vel) * 4, vel));
    }
  }, []);

  // **** Event handlers ****

  const onDeviceMoved = useCallback(
    (sketch: p5) => {
      makeNParticles(1, sketch.width);
    },
    [makeNParticles]
  );

  const onDeviceShaken = useCallback(
    (sketch: p5) => {
      makeNParticles(40, sketch.width);
    },
    [makeNParticles]
  );

  const onWindowResized = useCallback((sketch: p5) => {
    sketch.resizeCanvas(window.innerWidth, sketch.height);
  }, []);

  const onScroll = useCallback(() => {
    makeNParticles(10, window.innerWidth);
  }, [makeNParticles]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  // **** p5 setup and draw methods ****

  const setup = useCallback(
    (sketch: p5, canvasParentEl: Element) => {
      if (window.innerWidth >= GRAPH_BREAKPOINT) {
        sketch.createCanvas(window.innerWidth, SKETCH_HEIGHT).parent(canvasParentEl);
      } else {
        sketch.createCanvas(window.innerWidth, SKETCH_HEIGHT_SMALL).parent(canvasParentEl);
        deltasRef.current = DELTAS_SMALL;
        yUpperRef.current = Y_UPPER_SPACE_SMALL;
        yLowerRef.current = Y_LOWER_SPACE_SMALL;
      }

      // Init display settings
      graphInit(sketch);

      // Populate particles array
      for (let i = 0; i < particles.length; i++) {
        const pos = generateRandomPos(sketch.width);
        const vel = generateRandomVel();
        particles[i] = new Particle(
          pos,
          yUpperRef.current,
          Math.abs(vel) * 4,
          vel
        ); /* using velocity to generate size; further away = tinier = look slower */
      }
    },
    [graphInit]
  );

  const draw = useCallback(
    (sketch: p5) => {
      sketch.clear();

      // Render line graph
      /* Only draw graph on larger screen sizes - real estate needed for text on small screens */
      if (window.innerWidth > 400 && window.innerHeight > 720) {
        graphInit(sketch);

        sketch.line(0, yUpperRef.current, sketch.width, yUpperRef.current);

        sketch.beginShape();
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex((sketch.width * 1) / 4, yUpperRef.current + deltasRef.current[0]);
        sketch.curveVertex((sketch.width * 2) / 4, yUpperRef.current - deltasRef.current[0]);
        sketch.curveVertex((sketch.width * 3) / 4, yUpperRef.current + deltasRef.current[0]);
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.endShape();

        sketch.beginShape();
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex((sketch.width * 1) / 5, yUpperRef.current + deltasRef.current[1]);
        sketch.curveVertex((sketch.width * 2) / 5, yUpperRef.current - deltasRef.current[1]);
        sketch.curveVertex((sketch.width * 3) / 5, yUpperRef.current + deltasRef.current[1]);
        sketch.curveVertex((sketch.width * 4) / 5, yUpperRef.current + deltasRef.current[1]);
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.endShape();

        sketch.beginShape();
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex((sketch.width * 1) / 6, yUpperRef.current + (yLowerRef.current - 10));
        sketch.curveVertex((sketch.width * 2) / 6, yUpperRef.current - SEEDS[1]);
        sketch.curveVertex((sketch.width * 3) / 6, yUpperRef.current + (yLowerRef.current - 10));
        sketch.curveVertex((sketch.width * 4) / 6, yUpperRef.current - deltasRef.current[2]);
        sketch.curveVertex((sketch.width * 5) / 6, yUpperRef.current + (yLowerRef.current - 10));
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.endShape();

        sketch.beginShape();
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex(0, yUpperRef.current);
        sketch.curveVertex((sketch.width * 1) / 6, yUpperRef.current + (yLowerRef.current - 10));
        sketch.curveVertex((sketch.width * 2) / 6, yUpperRef.current - SEEDS[1]);
        sketch.curveVertex((sketch.width * 3) / 6, yUpperRef.current + (yLowerRef.current - 10));
        sketch.curveVertex((sketch.width * 4) / 6, yUpperRef.current - deltasRef.current[3] + SEEDS[0]);
        sketch.curveVertex((sketch.width * 5) / 6, yUpperRef.current + (yLowerRef.current - 10));
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.curveVertex(sketch.width, yUpperRef.current);
        sketch.endShape();
      }

      // Render particles
      particles.forEach((particle: Particle, i: number) => {
        // If particle is alive (i.e. in bounds and not too faint)
        if (isAlive(particle, sketch.height)) {
          // Move particle
          particle.y += particle.vel;
          if (particle.alpha > 0) {
            // If p.vel is positive, i.e. particle is going down, we need to make it fade quicker
            // because the graph's x axis is closer to the bottom than to the top
            if (particle.vel > 0) {
              particle.alpha -= Math.abs(particle.vel) * 3;
            } else {
              particle.alpha -= Math.abs(particle.vel);
            }
          }
          particle.draw(sketch);
        } else {
          // Remove particle
          particles.splice(i, 1);
        }
      });
    },
    [graphInit]
  );

  return (
    <Sketch
      setup={setup}
      draw={draw}
      deviceMoved={onDeviceMoved}
      deviceShaken={onDeviceShaken}
      windowResized={onWindowResized}
    />
  );
};

export default Graph;
