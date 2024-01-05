import { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Vector, Body } from "matter-js";

import { BACKGROUND_COLOUR, WALL_THICKNESS, LETTERS } from "./consts";
import { createLetterBody } from "./utils";

// const SVG_WIDTH_IN_PX = 100;
// const SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH = 0.3;

const engine = Engine.create();

const render = Render.create({
  element: document.getElementById("app")!,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    background: BACKGROUND_COLOUR,
    wireframes: false,
    showAngleIndicator: false,
  },
});

const mouse = Mouse.create(render.canvas);

const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false,
    },
  },
});

Composite.add(engine.world, mouseConstraint);

const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + WALL_THICKNESS / 2, 27184, WALL_THICKNESS, {
  isStatic: true,
});
const leftWall = Bodies.rectangle(
  0 - WALL_THICKNESS / 2,
  window.innerHeight / 2,
  WALL_THICKNESS,
  window.innerHeight * 10,
  {
    isStatic: true,
  }
);
const rightWall = Bodies.rectangle(
  window.innerWidth + WALL_THICKNESS / 2,
  window.innerHeight / 2,
  WALL_THICKNESS,
  window.innerHeight * 10,
  {
    isStatic: true,
  }
);

Composite.add(engine.world, [ground, leftWall, rightWall]);
render.mouse = mouse;

LETTERS.forEach((letter) => {
  const letterBody = createLetterBody(letter.letter, letter.parts);
  console.log(letterBody);
  Composite.add(engine.world, letterBody);
});

function handleResize() {
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;
  Body.setPosition(ground, Vector.create(window.innerWidth / 2, window.innerHeight + WALL_THICKNESS / 2));
  Body.setPosition(leftWall, Vector.create(0 - WALL_THICKNESS / 2, window.innerHeight / 2));
  Body.setPosition(rightWall, Vector.create(window.innerWidth + WALL_THICKNESS / 2, window.innerHeight / 2));
}

function scaleBodies() {
  const allBodies = Composite.allBodies(engine.world);

  allBodies.forEach((body) => {
    if (body.isStatic) {
      return;
    }
    const { min, max } = body.bounds;
    const bodyWidth = max.x - min.x;
  });
}

window.addEventListener("resize", handleResize);

const runner = Runner.create();

Render.run(render);
Runner.run(runner, engine);
