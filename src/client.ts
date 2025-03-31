import { DataSource } from "typeorm";
import { Cartoon } from "./entities/catoon.entities";
import { Genre } from "./entities/genre.entities";
import { Personnage } from "./entities/personage.entities";
export const dataSource = new DataSource({
  type: "sqlite", // Type de BDD recherchée (MySQL, PostGres, SQLite, ...)
  database: "./db.sqlite", // Prépférable de la mettre en .env
  entities: [Cartoon,Genre,Personnage], // On placera nos modèles de données ici
  synchronize: true, // Propriété de stratégie de synchronisation (ici, l'on synchronise à chaque fois que l'on lance le projet) ! Ne pas laisser en prod
});