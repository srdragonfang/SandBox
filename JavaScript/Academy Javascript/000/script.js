// var courses = [
//   {
//     id: 1,
//     title: "Khoi Thuoc",
//     coin: 500,
//   },
//   {
//     id: 2,
//     title: "Can Ho 137",
//     coin: 0,
//   },
//   {
//     id: 3,
//     title: "Mong Nguyet",
//     coin: 700,
//   },
//   {
//     id: 4,
//     title: "Noi Ta Gap Lai",
//     coin: 200,
//   },
//   {
//     id: 5,
//     title: "Tan Nguyet",
//     coin: 500,
//   },
// ];

// forEach
// courses.forEach(function(course, index) {
//     console.log(index, course.title);
// })
// every
// var isFree = courses.every(function(course,index) {
//     return course.coin === 0;
// });
// console.log(isFree);

// var course = courses.find(function(course,index) {
//     return course.title === "Khoi Thuoc";
// });
// console.log(course);
// function handleCouse (course, index) {
//     return `<h2>${course.title}</h2>`;
// }
// var newCourses = courses.map(handleCouse);
// console.log(newCourses.join(''));

// var totalCoin = 0;
// for (var course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin);
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);

// var totalCoin = courses.reduce(function (total, b) {
//   return total + b.coin;
// }, 0);
// console.log(totalCoin);

// var numbers = [1, 2, 3, [4, 5], 6, 7, [8, 9], 10];

// var flatArray = numbers.reduce(function (flatOutput, depthItem) {
//   return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);
// var total = flatArray.reduce(function (x, S) {
//   return (S = S + x);
// }, 0);

// console.log(total);

// var topics = [
//   {
//     topic: "Front-end",
//     courses: [
//       {
//         id: 1,
//         title: "shl",
//       },
//       {
//         id: 2,
//         title: "shl2",
//       },
//     ],
//   },
//   {
//     topic: "Back-end",
//     courses: [
//       {
//         id: 3,
//         title: "1shl",
//       },
//       {
//         id: 4,
//         title: "2shl2",
//       },
//     ],
//   },
// ];

// var newCourses = topics.reduce(function (x, newToppic) {
//   return x.concat(newToppic.courses);
// }, []);
// console.log(newCourses);

// var html = newCourses.map(function (newToppic) {
//   return `
//     <div>
//     <h2>${newToppic.title}</h2>
//     <h2>ID: ${newToppic.id}</h2>
//     </div>
//     `;
// });

// console.log(html.join(""));
// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.reduce2(function (total, number, index, array) {
//   //   console.table({ total, number, index, array });
//   return total + number;
// }, 10);

// console.table({
//   "ket qua": result,
// });

// function test(number) {
//   if (typeof number === "function") {
//     number("hello");
//   }
// }
// function shownumber(a) {
//   console.log(a);
// }

// test(shownumber);
// Callback
// 1 - ham
// 2 - truyen qua doi so
// 3 - duco goi lai

// Array.prototype.map2 = function (myFunction) {
//   var output = [];
//   arrayLength = this.length;
//   for (var i = 0; i < arrayLength; ++i) {
//     var result = myFunction(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// var courses = ["PHP", "JS", "Html", "css"];
// function myFunction(course) {
//   return `
//     <h2>${course}</h2>
//     `;
// }
// const htmls = courses.map2(myFunction);
// console.log(htmls);

var courses = [
  {
    id: 1,
    title: "css",
    price: 100,
  },
  {
    id: 2,
    title: "js",
    price: 100,
  },
  {
    id: 3,
    title: "html",
    price: 200,
  },
  {
    id: 4,
    title: "react",
    price: 500,
  },
];
Array.prototype.forEach2 = function (timfor) {
  arrayLength = this.length;
  result = [];
  for (var i = 0; i <= arrayLength; i++) {
    var output = timfor(this[i], i);
    result.push(output);
  }
  return result;
};
function timfor(course) {
  return `
  <h2>${course}</h2>
  `;
}
const htmls = courses.forEach2(timfor);
console.log(...[htmls.join("")]);
