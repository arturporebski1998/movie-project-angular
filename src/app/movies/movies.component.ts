import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { title } from 'process';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  
  movie: Movie;
  message: any;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private movieService: MovieService) { 
      this.movie = new Movie(0,'','','',0,0,'','',);
     }
  
  
     onSubmit() {
      this.movieService.saveMovie(this.movie).subscribe(result => this.gotoMovieList());
    }

    gotoMovieList() {
      this.router.navigate(['/movies']);
    }

    public saveMovie() {
      let response = this.movieService.saveMovie(this.movie).subscribe((data) => this.message = data);
    }

   

  ngOnInit() {
    //this.getMovies();
  }


  
  // getMovies(): void {
  //   this.movieService.getMovies()
  //   .subscribe(movies => this.movies = movies);
  // }


  // add(title: string): void {
  //   title = title.trim();
  //   if (!title) { return; }
  //   this.movieService.addMovie({ title } as Movie)
  //     .subscribe(movie => {
  //       this.movies.push(movie);
  //     });
  // }

  // delete(movie: Movie): void {
  //   this.movies = this.movies.filter(h => h !== movie);
  //   this.movieService.deleteMovie(movie).subscribe();
  // }


}