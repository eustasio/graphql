import { default as cartoons } from "../../dataset.json";
import { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
    id: string;
  }
export const getOneCartoonById = (_: unknown, args: GetOneCartoonByIdArgs): Cartoon => {
    return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
  };
export default getOneCartoonById;