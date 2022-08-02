// Hàm  replace()  giúp chúng ta thay thế chuỗi bằng cách sử dụng String và Regex, về cơ bản hàm này chỉ thay thế kết quả đầu tiên. Chúng ta có thể khiến nó thay thế toàn bộ kết quả trong chuỗi bằng các dùng  /g  ở cuối đoạn REGEX:

var string = "john john";  
console.log(string.replace(/hn/, "ana")); // "joana john"  
console.log(string.replace(/hn/g, "ana")); // "joana joana"  