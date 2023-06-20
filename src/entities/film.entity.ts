import { Entity, PrimaryGeneratedColumn, Column, InsertEvent, Decimal128, EventSubscriber, EntitySubscriberInterface, AfterInsert } from "typeorm";

@Entity()
export class Film {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  description: string;

  @Column()
  releaseDate: Date;

  @Column()
  ticketPrice: number;

  @Column()
  country: string;

  @Column()
  genre: string;

  @Column()
  rating: number;
}