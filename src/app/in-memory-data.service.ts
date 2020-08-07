import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1,
        title: "Tenet",
        genre: "Thriller / Action / Sci-Fi",
        director: 'Christopher Nolan',
        date: 2020,
        avgRate: 7.8,
        country: "Canada / USA / UK",
        description: 'Blablabla', },
    
    { id: 2,
        title: "Dunkirk",
        genre: "Action / Drama / History",
        director: 'Christopher Nolan',
        date: 2017,
        avgRate: 7.9,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    
      { id: 3,
        title: "Interstellar",
        genre: " Adventure / Drama / Sci-Fi",
        director: 'Christopher Nolan',
        date: 2014,
        avgRate: 8.6,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    
       { id: 4,
        title: "The Dark Knight Rises",
        genre: " Adventure / Action",
        director: 'Christopher Nolan',
        date: 2012,
        avgRate: 8.4,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    
      { id: 5,
        title: "Inception",
        genre: " Adventure / Action / Drama",
        director: 'Christopher Nolan',
        date: 2010,
        avgRate: 8.8,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    
      { id: 6,
        title: "The Dark Knight",
        genre: " Action / Drama / Crime",
        director: 'Christopher Nolan',
        date: 2008,
        avgRate: 9.0,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    
      { id: 7,
        title: "The Prestige",
        genre: " Drama / Mystery / Sci-Fi",
        director: 'Christopher Nolan',
        date: 2006,
        avgRate: 8.5,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    
      { id: 8,
        title: "Batman Begins",
        genre: " Action / Adventure",
        director: 'Christopher Nolan',
        date: 2005,
        avgRate: 8.2,
        country: "Canada / USA / UK",
        description: 'Blablabla' },
    ];
    return {movies};
  }

  // Overrides the genId method to ensure that a movie always has an id.
  // If the movies array is empty,
  // the method below returns the initial number (11).
  // if the movies array is not empty, the method below returns the highest
  // movie id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}