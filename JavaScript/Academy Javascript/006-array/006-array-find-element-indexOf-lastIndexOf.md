# Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng phương thức indexOf() và lastIndexOf()

Trong bài trước chúng ta đã biết phương thức indexOf() và lastIndexOf() trong JavaScript sẽ trả về vị trí tìm thấy của phần tử chỉ định trong mảng ban đầu, và nếu phần tử đó không tồn tại thì giá trị `-1` sẽ được trả về.

Xem thêm: [Tìm phần tử trong mảng JavaScript (indexOf,lastIndexOf))](https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/mang-trong-javascript/tim-phan-tu-trong-mang-javascript)

Ứng dụng điều này, chúng ta cũng có thể sử dụng hai phương pháp trên để kiểm tra phần tử có tồn tại trong mảng JavaScript hay không.

Ý tưởng ở đây là sẽ kiểm tra kết quả hai phương thức trên, nếu khác `-1` nghĩa là phần tử chỉ định có tồn tại, và nếu kết quả bằng `-1` thì có nghĩa là phần tử chỉ định không tồn tại trong mảng ban đầu. Chúng ta cùng xem các ví dụ cụ thể sau đây:

Ví dụ 1: Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng phương thức indexOf()

```jsx
function check_arr(element,arr){
  let check = arr.indexOf(element);
  return check == -1 ? false: true
}

let arr = ['a', 'b', 'c'];

console.log(check_arr('b', arr));
//> true

console.log(check_arr('d', arr));
//> false
```

Ví dụ 2: Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng phương thức lastIndexOf()

```jsx
function check_arr(element,arr){
  let check = arr.lastIndexOf(element);
  return check == -1 ? false: true
}

let arr = ['a', 'b', 'c'];

console.log(check_arr('b', arr));
//> true

console.log(check_arr('d', arr));
//> false
```