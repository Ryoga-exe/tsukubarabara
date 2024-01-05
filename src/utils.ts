import { Bodies, Body, Svg, Vector, Vertices } from "matter-js";
import type { Part } from "./types";
import { TEXT_COLOUR } from "./consts";

export function createLetterBody(letter: string, parts: Part[]): Body {
  const letterParts: Body[] = [];
  parts.forEach((part) => {
    const path = document.querySelector(`#${letter}-${part.id} > path`) as SVGPathElement;
    const vertices = Vertices.scale(Svg.pathToVertices(path, part.sampleLength), 10, 10, Vector.create());
    const colour = part.colour || TEXT_COLOUR;
    const body = Bodies.fromVertices(100 + part.position.x, 100 + part.position.y, [vertices], {
      isStatic: false,
      render: { fillStyle: colour, strokeStyle: colour, lineWidth: 1 },
    });
    Body.setPosition(
      body,
      Vector.create(
        body.position.x + (body.position.x - body.bounds.min.x),
        body.position.y + (body.position.y - body.bounds.min.y)
      )
    );
    letterParts.push(body);
  });
  if (letterParts.length === 1) {
    return letterParts[0];
  }
  return Body.create({
    parts: letterParts,
    isStatic: false,
  });
}
