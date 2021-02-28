# Netflix Clone
> An app that mimics the Netflix layout and shows 'Content' pulled from [The Movie Database](https://www.themoviedb.org/?language=en-US). Allows to you sign up for a profile and 'purchase' a subscription using a test Stripe account.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
When using the App you can log in with a test account created: test@test.com Password: abc123<br>
The test credit card to 'purchase' a subscription is: CC# 4242 4242 4242 4242 Exp# 04/24 CVC# 424<br>
Then fill in the rest with false information.

## Screenshots
#### While Signed Out
![While Signed Out](https://i.imgur.com/TpRMYel.jpg)<br>
#### While Signed In
![While Signed In](https://i.imgur.com/2ulRyzh.jpg)<br>
#### Profile/Subscription
![Profile/Subscription](https://i.imgur.com/uJbLY9A.png)

## Technologies
* Reactjs
* Redux
* Axios
* Stripe
* TMDB API

## Setup
To Run this App Locally Do The Following:
* First install Node to use NPM - [Install Node](https://nodejs.org/en/)
* Then Clone this project - [Steps to Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
* Then in terminal do as follows:
```
$ cd <file location>
$ npm install
$ npm start
```

## Code Sample
Code for Rows rendering movies:
```
return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters">
            {movies.map(
                (movie) => 
                ((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (
                    <img
                    className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                    key={movie.id}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    />
                )
            )}
            </div>
        </div>
    )
```

## Features
* Allows you to make a profile to gain access to site
* Allows you to process a test payment through strip to subscribe to App
* Renderes movies in rows in different categories

To-do list for future versions:
* Add a feautre to show trailers when content is clicked
* Only gain access to see  trailers after paying for a subscription using a test stripe account

## Status
Project is: _in progress_ this is version 1

## Inspiration
Used netflix.com as a refrence and inspiration

## Contact
_Feel Free To Contact Me_<br>
Created by [@lupuscode](https://www.instagram.com/lupuscode/)<br>
Email <eelopez@gmail.com>
