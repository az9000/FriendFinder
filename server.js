// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const html = require('./app/routing/htmlRoutes.js');
const api = require('./app/routing/apiRoutes.js');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
// Basic route that sends the user first to the HOME Page
app.get('/', html.home);

// Basic route that sends the user first to the SURVEY Page
app.get('/survey', html.survey);

// Basic route that gets/posts data
app.get('/api/friends', api.getFriends);
app.post('/api/friends', api.addFriend);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
