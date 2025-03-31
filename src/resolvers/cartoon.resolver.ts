
import { default as cartoons } from "../../dataset.json";
import { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
    id: string;
  }
export const getOneCartoonById = (_: unknown, args: GetOneCartoonByIdArgs): Cartoon => {
    return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
  };





export const createCartoon = (
  _: unknown, args: {cartoon: Cartoon}
 ): number => {
  const { personnages, ...rest } = args.cartoon;
  const newPersonnages = personnages.map((pers) => ({
    ...pers,
    id: +`${Date.now()}`,// ID as Timestamp
  }));
  const id = cartoons[cartoons.length - 1].id + 1 // ID incrementation du dernier ID du tableau
  const newCartoon: Cartoon = {
    ...rest,
    personnages: newPersonnages,
    id,
  };
  cartoons.push(newCartoon);
  return id;
};


