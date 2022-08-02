dogs.toString(); // convert to string: results "Bulldog,Beagle,Labrador"
// → chuyển array sang chuỗi, phần tử tự động cách nhau bằng dấu phẩy, không thể thay đổi dấu phẩy.
dogs.join(' * '); // join: "Bulldog * Beagle * Labrador"
// biến array thành một chuỗi <> split() - biến một chuỗi thành array
// Tương tác với array sâu hơn:




// ANCHOR ** THAY ĐỔI MẢNG
Array.prototype.forEach();
Array.prototype.map();
Array.prototype.join();
Array.prototype.group();
Array.prototype.groupToMap();
Array.prototype.reverse();
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)