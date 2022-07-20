// Nếu bạn muốn hợp 2 mảng lại với nhau có thể dùng hàm  concat()

var array1 = [1, 2, 3];  
var array2 = [4, 5, 6];  
console.log(array1.concat(array2)); // [1,2,3,4,5,6];  
// Code language: JavaScript (javascript)
// Tuy nhiên cách này không phù hợp với các mảng lớn vì nó sẽ tốn khá nhiều bộ nhớ bằng cách tạo ra một mảng mới. Bạn có thể dùng hàm  push.apply(arr1, arr2)  để nối 2 mảng lại với nhau, thay vì tạo 1 mảng mới như cách đầu tiên.

var array1 = [1, 2, 3];  
var array2 = [4, 5, 6];  
console.log(array1.push.apply(array1, array2)); // [1,2,3,4,5,6]; 