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
  styleUrls: ['./movies.component.css'],
  providers: []
})
export class MoviesComponent implements OnInit {
  title = 'Movie Frenzy';

  public movies: Movie[] = null;
  searchMovie: any = '';

  constructor(
    private http: HttpClient,
    private location: Location,
     ){
    }

  public ngOnInit() {
    this.location.subscribe(() => {
      this.getMovies();
    });
    this.getMovies();
  }

  // Get all the movies to display
  public getMovies() {
    this.http.get('http://localhost:3000/movies').subscribe( movies => {
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
  // Get movies based on a search term
  public getMoviesBy(query: string) {
    this.http.get(`http://localhost:3000/movies/search/${query}`).subscribe( movies => {
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

