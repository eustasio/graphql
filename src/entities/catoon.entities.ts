import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Genre } from "./genre.entities";

@Entity()
export class Cartoon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  nb_of_episodes: number;

  @Column()
  nb_of_seasons: number;

  @Column()
  realisator: string;

  @Column()
  author: string;

  @Column()
  ft_diffusion: string;

  @OneToMany(() => Genre, (genre) => genre.cartoon)
  genres: Genre[]
}

// {
//   id: 21354,
//   name: "dzejizdf",
//   genres: [
//     {
//       id: 123654,
//       name: "dze"
//     }
//   ]
// }