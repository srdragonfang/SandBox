Caching array.length trong vòng lặp
Một vòng lặp  for  thường gặp:

for (var i = 0; i < array.length; i++) {  
console.log(array[i]);
}
Code language: PHP (php)
Nếu bạn làm việc với mảng nhỏ thì ko có vẫn đề gì nhưng khi làm việc với mảng lớn, đoạn code này sẽ tính lại kích thước của mảng trong mỗi lần lặp. Điều này sẽ khiến mỗi vòng lặp chậm đi một chút. Để tránh điều này, ta có thể cache  array.length  vào một biến như sau:

for (var i = 0, length = array.length; i < length; i++) {  
console.log(array[i]);
}