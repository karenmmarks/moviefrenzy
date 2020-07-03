import {Location} from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/movie.model';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class MovieService {
  // THIS MOVIESERVICE CLASS IS NOT BEING USED RIGHT NOW
    // public movies: Movie[] = null;
    // searchMovie: any = '';

  constructor(private http: HttpClient) { }

  // returns all the movies without a search term
  getMovies() {
    let movies: Movie[] = [];

    this.http.get<Movie[]>('http://localhost:3000/movies').forEach( result => {
      movies = (result as Movie[]).map(movie => {
        return movie;
      });
    });

    return movies;
  }

  // returns only movie names in search bar
  getNamesSearch(query: string) {
    let movies: Movie[] = [];
    this.http.get<Movie[]>(`http://localhost:3000/movieNames/search/${query}`)
    .subscribe( result => {
      movies = (result as Movie[]).map(movie => {
        return movie;
      });
    });

    return movies;
  }
  // returns all movie info
  async getSearch(query: string) {
    let movies: Movie[] = [];
    this.http.get<Movie[]>(`http://localhost:3000/movies/search/${query}`)
    .subscribe( result => {
      movies = (result as Movie[]).map(movie => {
        return movie;
      });
    });

    return movies;
  }

  createMovie(movie: Movie, image: any) {
    this.http.post('http://localhost:3000/movie', movie);
    this.http.post(`http://localhost:3000/upload/${(movie.name).replace(' ', '')}`, image);
  }
}
