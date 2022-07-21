# Array.filter()

Array filter trong JavaScript là phương thức trong Array Object, có tác dụng lấy các phần tử thỏa mãn điều kiện chỉ định từ mảng ban đầu và ra tạo mảng mới trong JavaScript.

Phương thức Array filter hoạt động theo cơ chế:

Lấy từng phần tử trong mảng theo thứ tự từ đầu mảngChuyển chúng đến đối số của phương thức là một [hàm callback](https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao//ham-trong-javascript/ham-callback-trong-javascript/) chứa các biểu thức điều kiện dùng để kiểm traSau đó kiểm tra phần tử đó có thỏa mãn các điều kiện không, và nếu thỏa mãn thì thêm phần tử đó như là một phần tử mới vào mảng kết quả.

arr.filter(callbackFn(value));

arr.filter(callbackFn(value, index));

arr.filter(callbackFn(value, index, array));

`arr` là mảng ban đầu`callbackFN` là hàm callback chứa các biểu thức điều kiện. 

Hàm callback sẽ nhận từng phần tử từ mảng `arr` để kiểm tra

`value` là tên một biến dùng để gán giá trị của phần tử đang được lấy từ mảng để truyền vào `callbackFN`

`index` là tên một biến dùng để gán index của phần tử đang được lấy từ mảng để truyền vào `callbackFN`

`array` là tên một biến dùng để gán cả mảng ban đầu để truyền vào `callbackFN`