// NaN = not a number === chính xác hơn: number không hợp lệ
// NaN là một giá trị, và là giá trị kiểu số => typeof NaN === 'number'
// ! NaN được đặc tả là không bao giờ bằng với một đối tượng hay một giá trị nào đó
// NOTE 
NaN === NaN; //false
// Why is NaN === NaN false? => http://es5.github.io/#x11.9.6
isNaN(NaN); // true


console.log(isNaN('Anonystick.com')); //true
console.log(isNaN(undefined)); //true
console.log(isNaN({})); //true
// Nhìn sơ qua chúng ta thấy không phải là giá trị NaN nhưng vẫn return về true. 
// Ngộ thật. Mà ngộ nha, BUG này tồn tại lâu rồi, nhưng giờ vần vậy. 
// Chính vì vậy, những ai theo dõi blog javascript thì có thể thấy kể từ khi ES6 được Release thì có một phương pháp đó là Number.isNaN(). 
// Có thể giúp chúng ta fix bug trong javascript này.
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN('Anonystick.com')); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN({})); //false

// >URL: https://anonystick.com/blog-developer/numberisnan-va-isnan-hieu-ve-su-khac-biet-trong-javascript-20201225545925