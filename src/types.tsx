import { Shapes } from "./enum";

export type Player = Readonly<{
  username: string;
  choice?: Shapes;
}>;
