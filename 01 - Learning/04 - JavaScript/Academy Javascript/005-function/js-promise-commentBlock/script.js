var users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "John Smith",
  },
  {
    id: 3,
    name: "John Soek",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "This is fucking awesome!",
  },
  {
    id: 2,
    user_id: 2,
    content: "Yeah, you are right!",
  },
  {
    id: 3,
    user_id: 1,
    content: "Goodboyx!",
  },
];

function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}
function getUsersByIds(userIds) {
  return new Promise(function (resolve, reject) {
    var results = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(results);
    }, 1000);
  }, 1000);
}
getComments().then(function (comments) {
  var userIds = comments.map(function (comment) {
    return comment.user_id;
  });
  return getUsersByIds(userIds)
    .then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    })
    .then(function (data) {
      var commentBlocks = document.getElementById("comment-block");
      var html = "";
      data.comments.forEach(function (comment) {
        var user = data.users.find(function (user) {
          return user.id === comment.user_id;
        });
        html += `<li>${user.name}: ${comment.content}</li>`;
      });
      commentBlocks.innerHTML = html;
    });
});
