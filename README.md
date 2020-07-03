# Movie Frenzy Application


## Installing the npm packages

```
$ npm install
```
This will install all of the packages from the package.json file

## Launching the server

```
$ npm start
```
This calls the start script, which is defined as: ```node src/index.js```. The server will then be specified on the given port.

##  Post Mordem

This project was begun to apply for a Front-End Web Developer - Entry Level position. I had a week to complete this website in the Framework of my choice. I choose Angular not because I am an expert, but more to learn the most and grow as a web programmer. I knew it would be a challenge to accomplish this but I was determined to not give up until I ran out of time or finished, whichever came first. 

I had been building the front-end only with no connections to a database at work using Accessibility practices and Bootstrap components along with implementing and testing some Material Components. I stuck with Bootstrap components for now but may switch to Material, still up for testing further. I have plans to continue working on this project and using some of the logic I created and will be creating (image upload feature) for another project I am working on.

Since I personally had never used nodeJS to serve data on the back end and have used php and Cold Fusion, I felt that I wanted to try the latest methodologies. I did consult my son who knows nodeJS and setting up backends to help with some of the setup and logic. We had already set up an Ubunto server together for another project, so I decided to serve it there. I do not claim to be a backend programmer at this point in my early career, but do aim to keep up with it. The database creation in mySQL was also familar, so that was not too much of a challenge. I learned about Postman and how to test the posts and gets, which provided a great troubleshooting tool to use in the future as well.

Making the original navigation and movie page posed to be a bit of a challenge getting the data in and attempting to set up the search function in a service, so due to lack of time, I abandoned the service for now to be able to move onto creating the registration and login after setting up the model user file. This posed to be a bit easier once registration was set up, as login uses similar logic and the same table. I learned about bcrypt's hashing functionality and was able to get that working on the registration and login. As I tested it further, there was some troubleshooting and refactoring to get the behavoir I desired on the login and registration.  I did set up the back end for the voting and feedback but have not implemented that on the front end yet, I may have to refactor some of the back end once I get into that. The search works and I did put in some logic on the back end to not have the users be able to rview the same movie twice by tying the reviews to a user name.  

### What I would have changed
I started out by looking at how some other people went about setting up a movie review web app, instead of setting up the back end and front end html specifics and googling the things I wanted to do by smaller pieces like just registration and login. For future, I would use the offical Angular site more for its information on the smaller specific pieces I aim to implement. I feel that starting with the nodeJS setup of the database serving gave me endpoints and success to continue and would stick with nodeJS, mySQL, Postman, bcrypt, Angular 9 with Bootstrap. Time is a difficult thing for most people, I did dedicate a bit of time in small chunks. I find that when coding it is better to have larger chunks devoted, so I would have done that differently as well. I did not get an administration interface to add the new movies done yet, I should have started with that and the login/registration first and then added in the searching and movie displaying after.

### What I would have done with more time
I plan to continue this and fix the movie service, add a login/registration service, add the upload of the images functionality and adding a movie with the admin page. I need to handle the routing better as well.

### What I learned
Angular is definitely my choice framework language to use and want to continue this project as I see many uses for the components (uploading movies can add a small content editor functionality to a site, which I see as beneficial, I also have a need for a user upload of images easily on my other site so I probably should have completed this part sooner). This was a rather large undertaking for a "week long project" that had to fit into daily life, but was a good learning experience. I learned that nodeJS, Postman, bcrypt make things easier on the backend, there are probably many more tools to explore as well. Overall, I learned that I have more to explore and am encouraged to keep working hard.
