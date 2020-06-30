import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Movie Frenzy';

  public movies: any [];

  constructor(
    private http: HttpClient,
    private location: Location ){
      this.movies = [];
    }

  public ngOnInit() {
    this.location.subscribe(() => {
      this.refresh();
    });
    this.refresh();
  }

  public async refresh(query?: any) {
    let url = 'http://localhost:3000/movies';
    if(query && query.target.value) {
      url += `/search/${query.target.value}`;
    }
    this.http.get(url).subscribe( movies => {
      this.movies = (movies as any[]).map(movie => {
        if (movie.description.length > 100) {
          movie.description = movie.description.slice(0 , 100) + '...';
        }
        return movie;
      });
    });
  }
}
