# FriendFinder
Look no more! Your friend is here!

## Objective
In this activity, I built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

This App utilizes the [npm](https://www.npmjs.com/) packages [express](https://www.npmjs.com/package/express) and [path](https://www.npmjs.com/package/path) to process `GET` and `POST` requests from an HTML-based client (or any API testing tools like [Postman](https://www.getpostman.com/).

## Structure
1. **server.js** - entry point file. This program imports [express](https://www.npmjs.com/package/express), [path](https://www.npmjs.com/package/path), and well as the other routing files.
1. **htmlRoutes.js** - used to do a default route to **home.html** page, as well as a `GET` route to display the Survey (**surevy.html**) page.
1. **apiRoutes** - the api route file that has the `GET` route `/api/friends` that will display a `JSON` representation of all possible friends, and the `POST` rout `/api/friends` that will submit survey results back to the server, and retrieve the closest friend match.
1. **friends.js** - a file that contains an object that has an array of possible friends, as well as a method to return closest match
1. **home.html** - FriendFinder home page
1. **survey.html** - survey page

## How to use
1. Clone, or download this repository
1. Navigate to where the `\FriendFinder` folder is
1. Install dependencies <br>
`$ npm install`
1. In Terminal, use node to start the server <br>
`$ node server.js`
1. You should see the following, indicating a successful server launch:
`App listening on PORT 3000`
1. In your favorite browser, navigate to `http://localhost:3000`

## Demo
[Heroku](https://www.heroku.com/) was used for hosting this app. <br>
Demo: [FriendFinder](https://damp-meadow-16793.herokuapp.com/)

## Repository
[FriendFinder](https://github.com/az9000/FriendFinder)

## Technologies used
1. node JS
1. HTML
1. CSS
1. JavaScript
1. Heroku

## Author
Fawzi Alami
