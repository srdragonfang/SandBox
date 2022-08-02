// This was hoisted, so it works
// returns 6
add(3, 3);
function add(num1, num2) {
	return num1 + num2;
};

// Câu hỏi, kết quả thế nào của code dưới đây
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();

// <!-- Kết qủa:
// Original salary was undefined
// My New Salary 5000$
// Đây chính là hoisting trong javascript, điều đó co nghĩa là salary không được đẩy lên cho nên line đầu tiên = undefined. Có thể chúng ta sẽ viết lại cho các bạn hiểu: -->

var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();