var courseApi = "http://localhost:3000/posts";

function start() {
  getCourses(renderCourses);

  handleCreateForm();
}

start();

// functions
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function createCourse(data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
function handleDeleteCourses(id) {
  var deleteCourse = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, deleteCourse)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");

  var htmls = courses.map(function (course) {
    return `
    <li class="course-item-${course.id}">
      <h4>${course.title}</h4>
      <h4>${course.author}</h4>
      <button onclick="handleDeleteCourses(${course.id})">Xoa</button>
    </li>
    `;
  });
  var html = htmls.join("");
  listCoursesBlock.innerHTML = html;
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var title = document.querySelector('input[name="title"]').value;
    var author = document.querySelector('input[name="author"]').value;

    var formData = {
      title: title,
      author: author,
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}
// var chaptersApi = "http://localhost:3000/chapters";
// function start() {
//   getChapters(renderChapters);
//   handleCreateForm();
// }
// start();
// function getChapters(callback) {
//   fetch(chaptersApi)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(callback);
// }
// function createChapter(data) {
//   var options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify(data),
//   };
//   fetch(chaptersApi, options)
//     .then(function (response) {
//       response.json();
//     })
//     .then(callback);
// }
// function renderChapters(chapters) {
//   var chaptersBlock = document.querySelector("#chapters-block");
//   var htmls = chapters.map(function (chapter) {
//     return `<li>Chapter #${chapter.number}: ${chapter.title}</li>`;
//   });
//   var html = htmls.join("");
//   chaptersBlock.innerHTML = html;
// }

// // function handleCreateChapter() {
// //   var addBtn = document.querySelector("#create");
// //   addBtn.onclick = function () {
// //     var number = document.querySelector('input[name="number"]').value;
// //     var title = document.querySelector('input[name="title"]').value;
// //     // var formData = {
// //     //   number: number,
// //     //   title: title,
// //     // };
// //     createChapter(formData, function () {
// //       getChapters(renderChapters);
// //     });
// //   };
// // }
// function handleCreateForm() {
//   var createBtn = document.querySelector("#create");

//   createBtn.onclick = function () {
//     var number = document.querySelector('input[name="number"]').value;
//     var title = document.querySelector('input[name="title"]').value;

//     var formData = {
//       number: number,
//       title: title,
//     };
//     createChapter(formData, function () {
//       getChapters(renderChapters);
//     });
//   };
// }
