import type { Vector } from "matter-js";

export interface Part {
  id: string;
  sampleLength: number;
  position: Vector;
  colour?: string;
}

export interface Letter {
  letter: string;
  parts: Part[];
}
