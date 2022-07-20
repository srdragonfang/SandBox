var dogs = ['Bulldog', 'Beagle', 'Labrador'];
var dogs = new Array('Bulldog', 'Beagle', 'Labrador'); // declaration

alert(dogs[1]); // access value at index, first item being [0]
dogs[0] = 'Bull Terier'; // change the first item

for (var i = 0; i < dogs.length; i++) {
	// parsing with array.length
	console.log(dogs[i]);
}




delete dogs[0]; // change element to undefined (not recommended)



// ANCHOR * xóa phần tử vào mảng
Array.prototype.shift();
dogs.shift(); // remove first element

Array.prototype.pop();
arr.pop(); // → xóa phần tử cuối
dogs.pop(); // remove last element
// → xóa phần tử cuối mảng và trả lại phần tử đã xóa, nếu không có phần tử cuối mảng (mảng rỗng) thì trả về undefined

Array.prototype.splice();
arr.splice(indexElStart, number); // → xóa phần tử ở vị trí
dogs.splice(2, 0, 'Pug', 'Boxer'); // add elements (where, how many to remove, element list)
// xóa, chèn phần tử vào mảng.
// - xóa
```jsx
    courses.splice(start - vi tri muon xoa - ex: 1, deleteCount - so luong muon xoa) -> xoa khoa hoc thu 2
    ```// - chèn
```jsx
    courses.splice(vi tri, deleteCount, them) -> courses(2, 0 - khong xoa, "NodeJS")
    ```;
var animals = dogs.concat(cats, birds); // join two arrays (dogs followed by cats and birds)


// ANCHOR Array.prototype.slice()
Array.prototype.slice(start, end);
dogs.slice(1, 4); // elements from [1] to [4-1]
// - slicing →  cắt mảng.
//     - courses.slice(0) → copy mảng
//     - courses.slice(1) → xóa phẩn tử đầu và tạo mảng mới.
//     - courses.slice(-2, -1) → xóa phẩn tử từ phải sang trái và tạo mảng mới.

