import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { genHash } from "../util";

@Entity()
export class Film {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  description: string;

  @Column()
  release_date: Date;

  @Column()
  ticket_price: number;

  @Column()
  country: string;

  @Column()
  genre: string;

  @Column()
  photo: string;

  @Column()
  rating: number;
}
