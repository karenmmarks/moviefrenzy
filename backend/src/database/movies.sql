CREATE TABLE IF NOT EXISTS accounts (
    userName varchar(255) NOT NULL,
    passwordHash char(255) NOT NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    primary key (userName)
);

CREATE TABLE IF NOT EXISTS movies (
    name varchar(255) NOT NULL,
    description text NOT NULL,
    imageLink varchar(255) NOT NULL,
    primary key (name)
);

CREATE TABLE IF NOT EXISTS reviews (
    userName varchar(255) REFERENCES accounts (userName),
    movieName varchar(255) REFERENCES movies(name),
    feedback text NOT NULL,
    rating int NOT NULL,
    primary key (userName , movieName)  
);