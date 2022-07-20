// ANCHOR * sắp xếp mảng
Array.prototype.sort(); // to sort the array alphabetically.
// ANCHOR * sắp xếp mảng - đảo ngược giá trị
// NOTE Array.prototype.reverse.call(obj) = Array.prototype.reverse.apply(obj) // → đảo ngược giá trị của obj

x.sort(function (a, b) {
	return 0.5 - Math.random();
}); // random order sort


dogs.reverse(); // sort string in descending order
dogs.sort(); // sort string alphabetically
dogs.reverse(); // sort string in descending order

x.sort(function (a, b) {
	return a - b;
}); // numeric sort

x.sort(function (a, b) {
	return b - a;
}); // numeric descending sort

highest = x[0]; // first item in sorted array is the lowest (or highest) value