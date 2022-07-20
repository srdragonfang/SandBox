Ví dụ 1: Kiểm tra phần tử có tồn tại trong mảng JavaScript bằng vòng lặp for

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