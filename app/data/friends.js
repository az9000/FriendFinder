var friends = {
  list: [
    {
      name: "Brandi",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Minnie_Mouse.png",
      scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
      name: "Alan",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png",
      scores: [5, 1, 4, 4, 5, 2, 3, 1, 4, 5]
    },
    {
      name: "Carl",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/800px-Yosemite_Sam.svg.png",
      scores: [5, 3, 4, 4, 5, 1, 3, 5, 4, 3]
    },
    {
      name: "Hannah",
      photo:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/658171cc-faed-4352-a35a-2b5f1f3db094/d4q60i4-bba67237-86ea-43da-8d65-9dfba8cffc25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1ODE3MWNjLWZhZWQtNDM1Mi1hMzVhLTJiNWYxZjNkYjA5NFwvZDRxNjBpNC1iYmE2NzIzNy04NmVhLTQzZGEtOGQ2NS05ZGZiYThjZmZjMjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Rg8Fxfa04wfCh1UyNTEr2-lFQtz0597Ajg2RqfE2hsU",
      scores: [5, 3, 4, 4, 5, 1, 3, 5, 4, 5]
    },
    {
      name: "Adam",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg",
      scores: [5, 5, 4, 4, 4, 4, 4, 3, 2, 1]
    },
    {
      name: "Zach",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/800px-Bugs_Bunny.svg.png",
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
        sum += Math.abs(newFriend.scores[i] - friend.scores[i]);
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
