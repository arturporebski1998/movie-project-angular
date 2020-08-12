import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

interface Genre {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movie: Movie = new Movie(0,'','','',0,'','');
  selectedValue: string;

  genres: Genre[] = [
    {value: 'action-1', viewValue: 'Action'},
    {value: 'adventure-2', viewValue: 'Adventure'},
    {value: 'comedy-3', viewValue: 'Comedy'},
    {value: 'fantasy-4', viewValue: 'Fantasy'},
    {value: 'horror-5', viewValue: 'Horror'},
    {value: 'mystery-6', viewValue: 'Mystery'},
    {value: 'romance-7', viewValue: 'Romance'},
    {value: 'thriller-8', viewValue: 'Thriller'},
    {value: 'western-9', viewValue: 'Western'},
    {value: 'scifi-10', viewValue: 'Sci-Fi'},
    {value: 'history-11', viewValue: 'History'}
  ];


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private movieService: MovieService,) { 
      this.movie = new Movie(0,'','','',0,'','');
     }

     ngOnInit() {
     }

    saveMovie(): void {
      this.movieService.addMovie(this.movie).subscribe();
    }
    
    



}
