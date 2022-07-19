// Thủ thuật này có thể cắt được mảng theo số lượng phần tử bạn muốn lấy, ví dụ bạn có 1 mảng có 6 phần tử, nhưng bạn chỉ muốn lấy 3 phần tử đầu tiên. Bạn có thể cắt mảng bằng cách gán  array.length = 3

var array = [1, 2, 3, 4, 5, 6];  
console.log(array.length); // 6  
array.length = 3;  
console.log(array.length); // 3  
console.log(array); 
// [1,2,3]  