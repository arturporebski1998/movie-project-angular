import { ClassMethod } from '@angular/compiler';

export class Movie {
    
    id: number;
    title: string;
    genre: string;
    director: string;
    date: number;
    avgRate: number;
    country: string;
    description: string;

    constructor(
      id: number,
      title: string,
      genre: string,
      director: string,
      date: number,
      avgRate: number,
      country: string,
      description: string,
      ){}
  }