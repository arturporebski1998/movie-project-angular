import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.findAll().subscribe(data => {
      this.movies = data;
    });
  }
}