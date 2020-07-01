
export class Review {
    public userName: string;
    public movieName: string;
    public feedback: string;
    public rating: number;

    constructor( userName: string, movieName: string, feedback: string, rating: number) {
        this.userName = userName;
        this.movieName = movieName;
        this.feedback = feedback;
        this.rating = rating;
    }
}
