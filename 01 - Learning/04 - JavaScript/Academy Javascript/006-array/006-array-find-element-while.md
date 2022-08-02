Ví dụ 2: Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng vòng lặp while

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