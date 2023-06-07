import { IsNotEmpty } from 'class-validator';

export class FilmDto {
  id: number;

  @IsNotEmpty()
  name: string;

  description: string;

  release_date: Date;

  ticket_price: number;

  country: string;

  genre: string;

  photo: string;

  rating: number;
}
