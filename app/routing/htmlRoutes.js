const path = require("path");

const homeFileName = path.join(__dirname, "../public", "home.html");
const surveyFileName = path.join(__dirname, "../public", "survey.html");

const home = function(req, res) {
  res.sendFile(homeFileName, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", homeFileName);
    }
  });
};

const survey = function(req, res) {
  res.sendFile(surveyFileName, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", surveyFileName);
    }
  });
};

module.exports = {
  home: home,
  survey: survey
};
