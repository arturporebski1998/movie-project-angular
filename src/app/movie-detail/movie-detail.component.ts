import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  @Input() movie: Movie;
  constructor(
    private moviesList: MoviesListComponent
  ) {}

  ngOnInit(): void {
    //this.moviesList.reloadMovies();
  }

  updateMovie(movie: Movie): void {
    this.moviesList.update(movie);
  }

  deleteMovie(movie: Movie): void {
    this.moviesList.deleteMovie(movie);
  }
  
  // goBack(): void {
  //   this.location.back();
  // }


}
