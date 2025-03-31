import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Cartoon } from "./catoon.entities";
@Entity()
export class Genre {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Cartoon, (cartoon) => cartoon.genres)
  cartoon: Cartoon;
}

// {
//   id: 123654,
//   name: "un genre",
//   cartoon: {
//     id: 12365,
//     name,
//     description: "dezpkcê"
//   }
// }