function arrToObj(arr) {
   return (
      Object.fromEntries(arr)
   )
}
// -> chỉ dùng được khi arr truyền vào là một array nesting
// Chúng ta sử dụng phương thức fromEntries để tạo object từ các trình lặp như sau:
// Object.fromEntries(Iterable);
// Trong đó Iterable là một trình lặp chứa nhiều phần tử trong nó, ví dụ như là Array hoặc là Map chẳng hạn. Cụ thể thì Iterable sẽ gồm các cặp đôi giá trị, trong đó giá trị đầu tiên dùng làm key, và giá trị thứ hai dùng làm value của thuộc tính trong object.
// Sau khi thực thi Object.fromEntries trong JavaScript, các cặp key:value trong trình lặp chỉ định sẽ được lấy ra và tạo ra object mới.