// ANCHOR * FUNCTION DECLARATION -> được hoisting
function add(num1, num2) {
	return num1 + num2;
}
// This was hoisted, so it works
// returns 6
add1(3, 3);
function add1(num1, num2) {
	return num1 + num2;
};
// ANCHOR * FUNCTION EXPRESSION -> không được hoisting

var add3 = function (num1, num2) {
	return num1 + num2;
};

// This was not, so it doesn't
// returns Uncaught TypeError: subtract is not a function
subtract(7, 4);
var subtract = function (num1, num2) {
	return num1 - num2;
};