import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Personnage {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

@Column()
short_description: string;
}