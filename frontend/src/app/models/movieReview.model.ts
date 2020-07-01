import { Movie } from './movie.model';
import { Review } from './review.model';

export class MovieReview {
    public movie: Movie[]; // specific movie info for a given set of reviews
    reviews: Array<Review>; // all the reviews for a given movie

    constructor( movie: Movie[], reviews: Review[]) {
        this.movie = movie;
        this.reviews = reviews;

    }
}
