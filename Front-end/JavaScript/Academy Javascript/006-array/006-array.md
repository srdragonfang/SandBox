var dogs = ['Bulldog', 'Beagle', 'Labrador'];
var dogs = new Array('Bulldog', 'Beagle', 'Labrador'); // declaration

alert(dogs[1]); // access value at index, first item being [0]
dogs[0] = 'Bull Terier'; // change the first item

for (var i = 0; i < dogs.length; i++) {
	// parsing with array.length
	console.log(dogs[i]);
}


1. Mảng tuần tự: là mảng có key tự động tạo là chữ số tăng dần bắt đầu từ 0.
2. Mảng không tuần tự: là mảng có key mà bạn phải tự định nghĩa bằng các ký tự chữ hoặc số, và key không được sắp xếp bất kỳ thứ tự nào.
3. Accessing Nested Arrays → Mảng lồng nhau - Mảng đa chiều: là mảng có chứa ít nhất một mảng khác trong nó.