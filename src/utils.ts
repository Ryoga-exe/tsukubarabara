import { Bodies, Body, Svg, Vector, Vertices } from "matter-js";
import type { Part } from "./types";
import { TEXT_COLOUR, OFFSET_X, OFFSET_Y, SCALE_RATIO } from "./consts";

export function calcateScaleFactor(): number {
  return Math.min(window.innerWidth, window.innerHeight) * SCALE_RATIO;
}

export function createLetterBody(letter: string, parts: Part[]): Body {
  const letterParts: Body[] = [];
  parts.forEach((part) => {
    const path = document.querySelector(`#${letter}-${part.id} > path`) as SVGPathElement;
    const vertices = Vertices.scale(Svg.pathToVertices(path, part.sampleLength), 10, 10, Vector.create());
    const colour = part.colour || TEXT_COLOUR;
    const body = Bodies.fromVertices(OFFSET_X + part.position.x, OFFSET_Y + part.position.y, [vertices], {
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
  const scaleFactor = calcateScaleFactor();
  const result =
    letterParts.length === 1
      ? letterParts[0]
      : Body.create({
          parts: letterParts,
          isStatic: false,
        });
  Body.scale(result, scaleFactor, scaleFactor);
  Body.setPosition(
    result,
    Vector.create(
      parts[0].position.x * scaleFactor + (result.position.x - result.bounds.min.x),
      parts[0].position.y * scaleFactor + (result.position.y - result.bounds.min.y)
    )
  );
  return result;
}
