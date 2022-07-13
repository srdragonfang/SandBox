var chaptersApi = "http://localhost:3000/chapters";

function start() {
  getChapters(renderChapters);
  handlePostChapters();
}
start();

function getChapters(callback) {
  fetch(chaptersApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function postChapters(data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(chaptersApi, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function renderChapters(chapters) {
  var chaptersBlock = document.querySelector("#chapters-block");

  var htmls = chapters.map(function (chapter) {
    return `
  <h1>Chapter #${chapter.number}: <strong>${chapter.title}</strong>
  `;
  });
  chaptersBlock.innerHTML = htmls.join("");
}
function handlePostChapters() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var number = document.querySelector('input[name="number"]').value;
    var title = document.querySelector('input[name="title"]').value;
    var formData = {
      number: number,
      title: title,
    };
    postChapters(formData, function () {
      getChapters(renderChapters);
    });
  };
}
