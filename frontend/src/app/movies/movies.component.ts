import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Movie Frenzy';

  public movies: Movie[] = null;
  searchMovie: any = '';

  constructor(
    private http: HttpClient,
    private location: Location ){
      this.movies = [];
    }

  public ngOnInit() {
    this.location.subscribe(() => {
      this.getMovies();
    });
    this.getMovies();
  }

  public async getMovies(query?: any) {
    let url = 'http://localhost:3000/movies';
    if (query) {
      url += `/search/${query}`;
    }
    this.http.get(url).subscribe( movies => {
      this.movies = (movies as any[]).map(movie => {
        if (movie.name.length > 35) {
          movie.name = movie.name.slice(0 , 35) + '...';
        }
        if (movie.description.length > 100) {
          movie.description = movie.description.slice(0 , 85) + '...';
        }
        return movie;
      });
    });
  }
}

