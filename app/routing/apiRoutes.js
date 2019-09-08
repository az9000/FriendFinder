var friendList = [];

const getFriends = function(req, res) {
  return res.json(friendList);
};

const addFriend = function(req, res) {
  var body = req.body;

  friendList.push(body);

  return res.json(body);
};

module.exports = {
  getFriends: getFriends,
  addFriend: addFriend
};