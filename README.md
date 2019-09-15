# FriendFinder
Look no more! Your friend is here!

## Objective
In this activity, I built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

This App utilizes the [npm](https://www.npmjs.com/) packages [express](https://www.npmjs.com/package/express) and [path](https://www.npmjs.com/package/path) to process `GET` and `POST` requests from an HTML-based client (or any API testing tools like [Postman](https://www.getpostman.com/).

## Structure
1. **server.js** - entry point file. This program imports [express](https://www.npmjs.com/package/express), [path](https://www.npmjs.com/package/path), and well as the other routing files.
1. **htmlRoutes.js** - used to do a default route to **home.html** page, as well as a `GET` route to display the Survey (**surevy.html**) page.
1. **apiRoutes** - the api route file that has the `GET` route `/api/friends` that will display a `JSON` representation of all possible friends, and the `POST` rout `/api/friends` that will submit survey results back to the server, and retrieve the closest friend match.
1. 

## How to use

## Demo

## Repository

## Technologies used

## Author
