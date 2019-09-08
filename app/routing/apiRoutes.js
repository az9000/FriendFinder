const friends = require('../data/friends');

const getFriends = function(req, res) {
  return res.json(friends.list);
};

const addFriend = function(req, res) {
  var body = req.body;

  // find closest match
  var myFriend = friends.match(body);

  return res.json(myFriend);
};

module.exports = {
  getFriends: getFriends,
  addFriend: addFriend
};