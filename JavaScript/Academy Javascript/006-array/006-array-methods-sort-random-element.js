// Nếu bạn muốn xáo trộn vị trí của các phần tử trong mảng mà không cần đoạn code quá phức tạp thì chỉ cần chạy 1 đoạn code nhỏ này:

var list = [1, 2, 3, 4, 5];  
console.log(list.sort(function() {  
return Math.random() - 0.5
})); 
// [3, 1, 2, 5, 4]