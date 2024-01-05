import type { Letter } from "./types";

export const BACKGROUND_COLOUR = "#00BFD6";
export const TEXT_COLOUR = "#FFFFFF";

export const WALL_THICKNESS = 60;
export const OFFSET_X = 0;
export const OFFSET_Y = 0;
export const SCALE_RATIO = 1.2 / 1080.0;

export const LETTERS: Readonly<Letter[]> = [
  // 1
  {
    letter: "I",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 60, y: 183 },
      },
    ],
  },
  {
    letter: "M",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 115, y: 183 },
      },
    ],
  },
  {
    letter: "A",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 255, y: 182 },
      },
      {
        id: "2",
        sampleLength: 10,
        position: { x: 305, y: 182 },
      },
      {
        id: "3",
        sampleLength: 10,
        position: { x: 297, y: 271 },
      },
    ],
  },
  {
    letter: "G",
    parts: [
      {
        id: "1",
        sampleLength: 1,
        position: { x: 382, y: 183 },
      },
    ],
  },
  {
    letter: "I",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 505, y: 183 },
      },
    ],
  },
  {
    letter: "N",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 562, y: 183 },
      },
    ],
  },
  {
    letter: "E",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 692, y: 183 },
      },
    ],
  },
  // 2
  {
    letter: "T",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 49, y: 349 },
      },
    ],
  },
  {
    letter: "H",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 165, y: 349 },
      },
    ],
  },
  {
    letter: "E",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 291, y: 349 },
      },
    ],
  },
  // 3
  {
    letter: "F",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 58, y: 516 },
      },
    ],
  },
  {
    letter: "U",
    parts: [
      {
        id: "1",
        sampleLength: 1,
        position: { x: 165, y: 516 },
      },
    ],
  },
  {
    letter: "T",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 283, y: 516 },
      },
    ],
  },
  {
    letter: "U",
    parts: [
      {
        id: "1",
        sampleLength: 1,
        position: { x: 397, y: 516 },
      },
    ],
  },
  {
    letter: "R",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 523, y: 516 },
      },
      {
        id: "2",
        sampleLength: 1,
        position: { x: 557, y: 516 },
      },
      {
        id: "3",
        sampleLength: 1,
        position: { x: 568, y: 596 },
      },
      {
        id: "counter",
        sampleLength: 0.3,
        position: { x: 557, y: 546 },
        colour: BACKGROUND_COLOUR,
      },
    ],
  },
  {
    letter: "E",
    parts: [
      {
        id: "1",
        sampleLength: 10,
        position: { x: 645, y: 516 },
      },
    ],
  },
  {
    letter: "period",
    parts: [
      {
        id: "1",
        sampleLength: 0.75,
        position: { x: 756, y: 613 },
      },
    ],
  },
];
