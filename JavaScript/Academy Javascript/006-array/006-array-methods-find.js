var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
console.log(dogs[i]);
}

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
// → chuyển array sang chuỗi, phần tử tự động cách nhau bằng dấu phẩy, không thể thay đổi dấu phẩy.
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
// biến array thành một chuỗi <> split() - biến một chuỗi thành array
// Tương tác với array sâu hơn:
dogs.pop();                             // remove last element
// → xóa phần tử cuối mảng và trả lại phần tử đã xóa, nếu không có phần tử cuối mảng (mảng rỗng) thì trả về undefined
dogs.push("Chihuahua");                 // add new element to the end
// thêm phần tử cuối mảng và trả lại mảng sau khi thêm (có thể thêm nhiều phần tử)
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
// xóa phần tử đầu mảng và trả lại phần tử đã xóa, không có phần từ đầu mảng (mảng rỗng) thì trả về underfined
dogs.unshift("Chihuahua");              // add new element to the beginning
// thêm một hay nhiều phần tử vào đầu mảng và trả lại mảng sau khi thêm.
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
// xóa, chèn phần tử vào mảng.
// - xóa
     ```jsx
    courses.splice(start - vi tri muon xoa - ex: 1, deleteCount - so luong muon xoa) -> xoa khoa hoc thu 2
    ```
// - chèn
    ```jsx
    courses.splice(vi tri, deleteCount, them) -> courses(2, 0 - khong xoa, "NodeJS")
    ```



    // ANCHOR ** KIỂM TRA - TÌM KIẾM
    Array.prototype.find()
    Array.prototype.findIndex()
    Array.prototype.indexOf()
    Array.prototype.lastIndexOf()
    // Array.prototype.lastIndexOf(giá trị/phần tử cần tìm)
    Array.prototype.includes() // → kiểm tra phần tử trong mảng → trả về giá trị boolean
    Array.prototype.some() 

