
export class Movie {
    public name: string;
    public description: string;
    public imageLink: string;

    constructor( name: string, description: string, imageLink: string ) {
        this.name = name;
        this.description = description;
        this.imageLink = imageLink;
    }
}
