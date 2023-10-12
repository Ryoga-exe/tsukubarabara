import { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Vector, Body } from "matter-js";
const THICKNESS = 60;

const engine = Engine.create();

const render = Render.create({
  element: document.getElementById("app")!,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    background: "#00BFD6",
    wireframes: false,
    showAngleIndicator: true,
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

let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);

for (let i = 0; i < 10; i++) {
  const circle = Bodies.circle(i, 10, 30, {
    friction: 0.3,
    frictionAir: 0.00001,
    restitution: 0.8,
  });
  Composite.add(engine.world, circle);
}

let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + THICKNESS / 2, 27184, THICKNESS, {
  isStatic: true,
});

let leftWall = Bodies.rectangle(0 - THICKNESS / 2, window.innerHeight / 2, THICKNESS, window.innerHeight * 10, {
  isStatic: true,
});
let rightWall = Bodies.rectangle(
  window.innerWidth + THICKNESS / 2,
  window.innerHeight / 2,
  THICKNESS,
  window.innerHeight * 10,
  {
    isStatic: true,
  }
);

Composite.add(engine.world, [boxA, boxB, ground, leftWall, rightWall]);
render.mouse = mouse;

function handleResize() {
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;
  Body.setPosition(ground, Vector.create(window.innerWidth / 2, window.innerHeight + THICKNESS / 2));
  Body.setPosition(leftWall, Vector.create(0 - THICKNESS / 2, window.innerHeight / 2));
  Body.setPosition(rightWall, Vector.create(window.innerWidth + THICKNESS / 2, window.innerHeight / 2));
}

window.addEventListener("resize", handleResize);

const runner = Runner.create();

Render.run(render);
Runner.run(runner, engine);
