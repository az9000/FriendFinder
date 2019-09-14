const friends = require('../data/friends');

const getFriends = function(req, res) {
  return res.json(friends.list);
};

const addFriend = function(req, res) {
  var body = req.body;
  
  var myFriend;
  if (friends.exists(body)) {
    myFriend = {
      name: "Oops! " + body.name + " already exists!",
      photo: body.photo
    }
    return res.json(myFriend);
  }
  // find closest match
  myFriend = friends.match(body);

  return res.json(myFriend);
};

module.exports = {
  getFriends: getFriends,
  addFriend: addFriend
};