import { Shapes } from "./enum";

export const winList = {
  [Shapes.rock]: Shapes.scissors,
  [Shapes.paper]: Shapes.rock,
  [Shapes.scissors]: Shapes.paper,
};
