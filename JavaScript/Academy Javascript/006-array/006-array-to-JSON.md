# Convert Array to JSON Object JavaScript
Bạn có thể sử dụng JSON.stringify() (xem thêm: Cách sử dụng JSON.stringify) chuyển đổi một Array thành một chuỗi có định dạng JSON trong JavaScript. Giả sử chúng ta có một array = [6, 7, 8, 9] và nếu bạn muốn array to JSON Object in javascript thì ví dụ sau sẽ cung cấp cho bạn một cách làm rất hay.
```js
var arr = [5, 6, 7, 8]; 
    var arrayToString = JSON.stringify(Object.assign({}, arr));  // convert array to string
    var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object

    console.log(stringToJsonObject);

// Output:

 {
       "0": 5,
       "1": 6,
       "2": 7,
       "2": 8
   }

```
Ở đây : 
*Hai phương thức JSON.stringify() và Object.assign() có nhiệm vụ chuyển từ một Array qua JSON string.* 
*Nhiệm vụ còn lạị thuộc phương thức JSON.parse() chuyển đổi String thành JSON object.*
1. Object.assign({}, arr) => convert arr to object
2. JSON.stringify() => to convert object to string
3. JSON.parse() => to covert string to json object