import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { genHash } from '../util';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await genHash(this.password);
  }
}
