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
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
// - slicing →  cắt mảng.
//     - courses.slice(0) → copy mảng
//     - courses.slice(1) → xóa phẩn tử đầu và tạo mảng mới.
//     - courses.slice(-2, -1) → xóa phẩn tử từ phải sang trái và tạo mảng mới.
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort

// ANCHOR * [favorites methods]
arr.pop() // → xóa phần tử cuối
arr.push() // → thêm phần tử vào Array
// arr.splice(vị trí xóa, ? ) // → xóa phần tử ở vị trí
// ANCHOR * [Static methods]

    Array.from()
    Array.isArray()
    Array.of()

// ANCHOR * [Instance methods]
    Array.constructor
    // Array.constructor === Array —> true
    Array.prototype.at()
    Array.prototype.concat()
    // Array.prototype.concat(mảng/giá trị được thêm vào)
    Array.prototype.copyWithin()
    // Array.prototype.copyWithin(vị trí phần tử được thay thế, vị trí phần tử dùng để thay thế)
    Array.prototype.entries()
    Array.prototype.entries().next().value
    Array.prototype.every()
    // Array.prototype.every(điều kiện kiểm tra)
    Array.prototype.fill(value, start, end)
    Array.prototype.filter()
    // ANCHOR ** KIỂM TRA - TÌM KIẾM
    Array.prototype.find()
    Array.prototype.findIndex()
    Array.prototype.indexOf()
    Array.prototype.lastIndexOf()
    // Array.prototype.lastIndexOf(giá trị/phần tử cần tìm)
    Array.prototype.includes() // → kiểm tra phần tử trong mảng → trả về giá trị boolean
    Array.prototype.some() 
    // ANCHOR ** THAY ĐỔI MẢNG
    Array.prototype.forEach()
    Array.prototype.map()
    Array.prototype.join()
    Array.prototype.group()
    Array.prototype.groupToMap()
    Array.prototype.pop()
    Array.prototype.push()
    Array.prototype.reverse()
    // NOTE Array.prototype.reverse.call(obj) = Array.prototype.reverse.apply(obj) 
    // // → đảo ngược giá trị của obj
    Array.prototype.shift()
    Array.prototype.unshift() 
    // // → trả về mảng mới sau khi thêm phần từ đầu mảng
    Array.prototype.slice(start, end)
    Array.prototype.splice()
    Array.prototype.sort() // to sort the array alphabetically.
    // hard to understand ————————————
    Array.prototype.flat()
    Array.prototype.flatMap()
    Array.prototype.reduce()
    Array.prototype.reduceRight()
    Array.prototype.keys()
    Array.prototype.of()