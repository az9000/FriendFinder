var friends = {
  list: [
    {
      name: "Brandi",
      photo:
        "https://drive.google.com/file/d/1PA096dLE3HPvEN3PlTv0crTndFbbjd8y/view",
      scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
      name: "Alan",
      photo:
        "https://drive.google.com/file/d/1PA096dLE3HPvEN3PlTv0crTndFbbjd8y/view",
      scores: [5, 1, 4, 4, 5, 2, 3, 1, 4, 5]
    },
    {
      name: "Carl",
      photo:
        "https://drive.google.com/file/d/1PA096dLE3HPvEN3PlTv0crTndFbbjd8y/view",
      scores: [5, 3, 4, 4, 5, 1, 3, 5, 4, 3]
    },
    {
      name: "Hannah",
      photo:
        "https://drive.google.com/file/d/1PA096dLE3HPvEN3PlTv0crTndFbbjd8y/view",
      scores: [5, 3, 4, 4, 5, 1, 3, 5, 4, 5]
    },
    {
      name: "Adam",
      photo:
        "https://drive.google.com/file/d/1PA096dLE3HPvEN3PlTv0crTndFbbjd8y/view",
      scores: [5, 5, 4, 4, 4, 4, 4, 3, 2, 1]
    },
    {
      name: "Zach",
      photo:
        "https://drive.google.com/file/d/1PA096dLE3HPvEN3PlTv0crTndFbbjd8y/view",
      scores: [4, 3, 2, 3, 5, 2, 3, 5, 4, 1]
    }
  ],
  match: function(newFriend) {
    var sum = 0;
    var smallest = 50;
    var myFriend = {};
    for (var index in this.list) {
      var friend = this.list[index];
      sum = 0;
      for (var i = 0; i < friend.scores.length; i++) {
        sum += Math.abs(scores[i] - friend.scores[i]);
      }
      if (sum <= smallest) {
        smallest = sum;
        myFriend = friend;
      }
    }

    return myFriend;
  }
};

module.exports = friends;
