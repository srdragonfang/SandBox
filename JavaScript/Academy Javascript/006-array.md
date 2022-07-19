# JS Array

typeof Array = object

→ làm thể nào để kiểm tra array hay object?

→ console.log(Array.isArray(biến muốn kiểm tra có phải array hay không))

- Lọc số lẽ
- Lọc số chẳn
- Thay thế phần tử trong mảng.
- Add qua mảng mới.
- Cập nhật phần tử trong mảng.

****Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng vòng lặp****

**Chúng ta cũng có thể sử dụng bất kỳ loại vòng lặp nào, ví dụ như vòng lặp for, forEach, hay là while chẳng hạn.**

**Ví dụ 1: Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng vòng lặp for**

```jsx
function check_arr(element,arr){
    let count = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] === element)  {
            count ++;
            break
        }
    }
    return (count >0) ? true : false
}

let arr = ['a', "bp", 'c'];

console.log(check_arr("bp", arr));
//> true

console.log(check_arr('d', arr));
//> false
```

**Ví dụ 2: Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng vòng lặp while**

```jsx
function check_arr(element,arr){
    let count = i = 0;
    while (i < arr.length){
        if (arr[i] === element)  {
            count ++;
            break
        }
        ++i;
    }
    return (count >0) ? true : false
}

let arr = ['a', "bp", 'c'];

console.log(check_arr("bp", arr));
//> true

console.log(check_arr('d', arr));
//> false
```

****Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng phương thức includes****

**Array includes trong JavaScript là một phương thức của Array Object, có tác dụng kiểm tra phần tử chỉ định có tồn tại trong mảng hay không. Nếu tìm thấy phần tử thì giá trị true (đúng) sẽ được trả về và ngược lại, nếu không tìm thấy phần tử trong mảng thì false (sai) sẽ được trả về.**

**Chúng ta sử dụng phương thức Array includes trong JavaScript với cú pháp sau đây:**

**`arr.includes (element [, fromIndex] );`**

**Trong đó:**

**`element` là phần tử cần tìm trong mảng `arrfromIndex` là vị trí index bắt đầu kiểm tra phần tử trong mảng arr. Và đối số này có thể được lược bỏ.**

**Thông thường chúng ta lược bỏ đi đối số `fromIndex` để tiến hành kiểm tra *phần tử chỉ định* trên toàn mảng ban đầu. Chỉ trong các trường hợp chúng ta muốn kiểm tra trong một phạm vi từ vị trí cụ thể nào đó cho tới cuối mảng ban đầu thì mới dùng thêm `fromIndex` mà thôi.**

**Sau đây hãy cùng xem các ví dụ cụ thể sử dụng phương thức includes() để kiểm tra phần tử có trong mảng JavaScript như sau:**

**Ví dụ 1: kiểm tra 1 phần tử có tồn tại trong mảng JavaScrip hay không**

```jsx
const array1 = [1, 2, 3];

console.log(array1.includes(2));
//true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// true

console.log(pets.includes('at'));
// false
```

**Ví dụ 2: kiểm tra 1 phần tử có trong phạm vi từ một vị trí đến cuối mảng JavaScrip hay không**

```jsx
let arr = ['a', 'b', 'c']

arr.includes('b', 0)    // true
arr.includes('b', 1)    // true
arr.includes('b', 2)    // false
arr.includes('b', 100)  // false
```

****Mảng tuần tự****: là mảng có key tự động tạo là chữ số tăng dần bắt đầu từ 0.

**Mảng không tuần tự**: là mảng có key mà bạn phải tự định nghĩa bằng các ký tự chữ hoặc số, và key không được sắp xếp bất kỳ thứ tự nào.

**Accessing Nested Arrays → Mảng lồng nhau - Mảng đa chiều**: là mảng có chứa ít nhất một mảng khác trong nó.