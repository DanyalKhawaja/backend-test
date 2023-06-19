import { float } from '@elastic/elasticsearch/lib/api/types';
import { IsNotEmpty } from 'class-validator';

export class FilmDto {
  id: number;

  @IsNotEmpty()
  name: string;

  description: string;

  releaseDate: Date;

  ticketPrice: number;

  country: string;

  genre: string;

  rating: number;
}
