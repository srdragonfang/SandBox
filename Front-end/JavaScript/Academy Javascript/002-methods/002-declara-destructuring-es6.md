Destructuring là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array. Điều này có thể làm giảm đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này. 
Có hai loại Destructuring: 
1. Destructuring Objects 
2. Destructuring Arrays.
    - Variable assignment
    - swapping
    - ignoring values
    - Assignment to new variables
    - Nested object and array destructuring

const str = "1986, cr7, boy, 35"
https://anonystick.com/blog-developer/destructuring-javascript-la-gi-buong-gi-buong-chu-dung-bo-qua-phan-nay-cua-es6-2019122141422037

```js
const {1: namea, 2: sex, 0: age} = str.split(',')
console.log(namea, sex, age) // cr7 boy 1986
```

1 - Variable assignment
// Chẳng hạn như chúng ta nhận được một response từ rest api. Chúng ta có thể gán ngay các biến và sử dụng.
```js
const res = [1, 2, 3, 4,] ;//res.response();
const [a, b, c] = res
console.log(a, b, c);//1 2 3
```

2 - Swapping

Nói đến Swapping thì cả một bầu trời hiện về, những thuật toán của các nhà phát triển lớn hầu như có nó. Vì vậy destructuring cũng có thể áp dụng trong hoàn cảnh này.

```js
var a = 1;
var b = 2;
var temp;
temp = a;
a = b;
b = temp;

console.log(a, b) ;//2, 1
```
Trước đó là a = 1, b = 2 sau khi gán tạm thì nó sẽ hoán đổi giá trị, giờ ta thử sử dụng destructuring trong Swapping:
```js
var a = 1;
var b = 2;
[a, b] = [b, a]
console.log(a, b) ;//2, 1
```

3 - Ignoring values 

Ví dụ 6:
```js
const res = () => [1, 2, 3]
const [a, ,b] = res()
console.log(a, b) ;//1,3
```
Chúng ta có thể bỏ qua giá trị 2 nhanh nhất có thể khi sử dụng destructuring. Trong ví dụ trên chúng ta có sử dụng tính năng arrow function es6. Bạn có thể tìm hiểu thêm về arrow function vì nó cũng giúp cho bạn nhiều về cách viết code.

4 - Assignment to new variables

Gán giá trị cho một biến mới, chúng ta xem tiếp ví dụ tiếp

Ví dụ 7:
```js
const res = {blog: 'anonystick.com', type: 'javascript'}
const {blog: nameBlog, type: newType} = res;
console.log(nameBlog, newType);//anonystick.com, javascript
```
Giờ đây nameBlog, và newType là biến mới và cũng được set giá trị tương ứng. 

5 - Nested object and array destructuring

Ở trường hợp này thi tôi khuyên các bạn nên sử dụng vì trường hợp này rất nhiều trong mã code của chúng ta nhất là các bạn làm dưới nodejs or backend.

Ví dụ 8:
```js
const blogs = {
	anonystick: [
  	{
    	pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

const {
  anonystick: [
  	{
  		pageFacebook: namePage,
      likes: numLikes,
      daily: numDaily
    }
  ]
} = blogs;

console.log(namePage, numLikes, numDaily );//Tip javascript Viet Nam, 4789, 1323
```zz
Như chúng ta có thể thấy, dữ liệu đó là một đối tượng có một thuộc tính được gọi là vị trí lần lượt chứa một mảng có các phần tử là các đối tượng. Với việc sử dụng destructuring, chúng ta phải lấy các giá trị của tất cả các thuộc tính có trong đối tượng bên trong mảng cùng vị trí.