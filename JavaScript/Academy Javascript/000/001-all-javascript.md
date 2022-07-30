# Javascript

<!-- ----------------------------------------------------------------------- -->
<!--                             ANCHOR DATATYPE                             -->
<!-- ----------------------------------------------------------------------- -->

## DATATYPE

Kiểu dữ liệu javascript là có 8 kiểu dữ liệu.
Trong đó:
- có 7 kiểu dữ liệu cơ bản hay còn gọi là Kiểu dữ liệu nguyên thủy trong JavaScript
    - Undefined, Null, Boolean, Number, String, Symbol (es6）
    - Và gần hơn thì chúng ta có thêm một kiểu nữa đó là BigInt được giới thiệu trong ES2020
- và một kiểu đó là kiểu tham chiếu = Object

### 1. UNDEFINED
Khi một biến được khai báo mà không gán hay set giá trị cho nó thì nó sẽ có giá trị undefined.
```js
var message;
alert(message);// undefined
```
Cần lưu ý rằng biến được khai báo nhưng chưa được khởi tạo không giống với biến chưa được khai báo, xem dưới đây.
```js
var msg;
alert(msg);// "undefined"
alert(a);// Error
Giờ sử dụng toán tử typeof để xem kiểu trên để xem thử

var msg;
// var a
alert(typeof msg);// "undefined"
alert( typeof a);// "undefined"
```

Ta thấy đấy cả hai đều có giá trị undefined. Dừng lại 1 giây nghĩ xem... kết quả này làm cho ta ngờ ngợ nhưng hợp lý về mặt logic. Bởi vì mặc dù hai biến này về cơ bản khác nhau về quan điểm kỹ thuật, nhưng thực tế không thể thực hiện các phép toán thực trên bất kỳ biến nào trong hai biến trên. Đúng không?

<!-- ! Mẹo: Cứ dùng typeof check xem nó undefined hay không, nếu undefined thì biến đó chưa được gán giá trị. -->

### 2. null 
Kiểu Null là kiểu dữ liệu chỉ có một giá trị và giá trị đặc biệt này là null. Null chỉ ra rằng một biến không có giá trị.
```js
let foo = null;
console.log(foo);   // null
// và null chính là một giá trị đặc biệt của một Object.
console.log(typeof undefined);  // 'undefined'
console.log(typeof null);       // 'object'
```

### null vs undefined
```js 
let food;
console.log(food) //undefined 
console.log(typeof food) //undefined 
let food = null;
console.log(food) //null 
console.log(typeof food) //object 

// typeof undefined = undefined
// typeof null = object

```

### 3. number
#### 3.1 number
Number.MIN_VALUE = 5e-324
Number.MAX_VALUE = 1.7976931348623157e+308
#### 3.2 NaN

NaN = not a number === chính xác hơn: ***number không hợp lệ {}***
NaN là một giá trị, và là giá trị kiểu số 

=> typeof NaN === 'number'
<!-- ! NaN được đặc tả là không bao giờ bằng với một đối tượng hay một giá trị nào đó -->

NaN === NaN; //false

[?] Why is NaN === NaN false? => http://es5.github.io/#x11.9.6
isNaN(NaN); // true
```js
console.log(isNaN('Anonystick.com')); //true
console.log(isNaN(undefined)); //true
console.log(isNaN({})); //true
```
* Nhìn sơ qua chúng ta thấy không phải là giá trị NaN nhưng vẫn return về true. 
* Ngộ thật. Mà ngộ nha, BUG này tồn tại lâu rồi, nhưng giờ vần vậy. 
Chính vì vậy, những ai theo dõi blog javascript thì có thể thấy kể từ khi ES6 được Release thì có một phương pháp đó là Number.isNaN(). 
Có thể giúp chúng ta fix bug trong javascript này.
```js
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN('Anonystick.com')); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN({})); //false

// >URL: https://anonystick.com/blog-developer/numberisnan-va-isnan-hieu-ve-su-khac-biet-trong-javascript-20201225545925

```

### typeof
```js
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'  
console.log(typeof object); // 'object'  
console.log(typeof array); // 'object'  
console.log(Array.isArray(arr)); // true => 'array'  
console.log(Array.isArray(arr)); // false => 'object' || ?  

console.log(typeof number); // 'number'  
console.log(typeof NaN); // 'number'  
console.log(typeof NaN); // 'number'

console.log(typeof boolean); // 'boolean'  

```

<!-- ----------------------------------------------------------------------- -->
<!--                                ANCHOR FUNCTION                  -->
<!-- ----------------------------------------------------------------------- -->
## Function

### Function Declaration

### Function Expression

<!-- --------------------------- FUNCTION X ES6 ---------------------------- -->
### Hoisting

    Hoisting là hành vi mặc định của JavaScript về việc di chuyển các khai báo lên đầu để compiled hay thực thi code của bạn.

### đồng bộ

### bất đồng bộ

-   promise, callback, async/await
-   Ngoài ra rộng hơn nữa bạn phải nắm những khái niệm như Blocking IO, noBlocking IO, và đồng bộ và bất đồng bộ.
-   Nói nhanh về bất đồng bộ hiểu nôm na là một người có thể làm được nhiều việc một lúc, có thể vừa đánh răng mà vừa xem phim... và ngược lại.

### callback

<!-- ----------------------------------------------------------------------- -->
<!--                              ANCHOR ARRAY                               -->
<!-- ----------------------------------------------------------------------- -->
## Array

<!-- ----------------------------------------------------------------------- -->
<!--                              ANCHOR OBJECT                              -->
<!-- ----------------------------------------------------------------------- -->
## Object

## Recursion - Đệ Quy

<!-- ----------------------------------------------------------------------- -->
<!--                               ANCHOR JSON                               -->
<!-- ----------------------------------------------------------------------- -->

## JSON

JSON là viết tắt của _JavaScript Object Notation_, là một _bộ quy tắc_ về _cách trình bày và mô tả dữ liệu_ trong một chuỗi lớn thống nhất được gọi chung là chuỗi JSON.

Nhu cầu trao đổi dữ liệu giữa các nền tảng và công nghệ khác nhau ngày càng lớn. Lúc này, XML trở nên cồng kềnh và làm nặng dữ liệu bởi cấu trúc thẻ của nó. Điều đó dẫn tới nhu cầu tạo ra một loại dữ liệu mới có tên gọi là JSON nhằm giải quyết vấn đề trao đổi dữ liệu giữa các nền tảng và làm nhẹ dung lượng lưu trữ của dữ liệu trao đổi.

Chuỗi JSON được bắt đầu bằng ký tự { và kết thúc bởi ký tự } .
JSON.parse() -> object javascript
JSON.stringify(object) -> JSON string
https://hocjavascript.net/json/truyen-du-lieu-json-voi-javascript/

<!-- ----------------------------------------------------------------------- -->
<!--                               ANCHOR AJAX                               -->
<!-- ----------------------------------------------------------------------- -->

### AJAX
AJAX là chữ viết tắt của Asynchronous JavaScript and XML. Nó là một bộ các kỹ thuật thiết kế web giúp cho các ứng dụng web hoạt động bất đồng bộ – xử lý mọi yêu cầu tới server từ phía sau. Chà, khoan bối rối nhé, chúng tôi sẽ giải thích từng thuật ngữ một cho bạn biết AJAX là gì.


## Vì sao javascript là mô hình đơn luồng

> url: https://anonystick.com/blog-developer/javascript-su-dung-don-luong-ly-do-tai-sao-2021040171820607
> Hoạt động không đồng bộ javascript
> Đây chính là mục tiêu của tôi muốn đề cập đến cho các bạn, thật ra nó rất nhiều điều để bàn đến ở đây:

-   JavaScript chỉ chạy trên một luồng
-   Tác vụ đồng bộ và tác vụ không đồng bộ trong javascript
-   Hàng đợi tác vụ và vòng lặp sự kiện
-   Chế độ hoạt động không đồng bộ
-   Kiểm soát quá trình hoạt động không đồng bộ javascript
    Vì vậy đầu tiên chúng ta sẽ tìm hiểu khái niệm như tiêu đề của nó "JavaScript sử dụng đơn luồng lý do tại sao?"

*   Mô hình đơn luồng = Nói cách khác, JavaScript chỉ có thể thực hiện một tác vụ tại một thời điểm và các tác vụ khác phải được xếp hàng sau.
<!-- ! Lưu ý rằng JavaScript chỉ chạy trên một luồng, không có nghĩa là công cụ JavaScript chỉ có một luồng. -->

Trên thực tế, JavaScript engine có nhiều luồng, một tập lệnh đơn chỉ có thể chạy trên một luồng (được gọi là luồng chính) và kết hợp với các luồng khác trong background.

<!-- ----------------------------------------------------------------------- -->
<!--                            ## Stack & Queue                             -->
<!-- ----------------------------------------------------------------------- -->

## Stack & Queue - hàng đợi

### Stack - cơ chế FILO(Last In First Out)

-   có một chồng chén vừa được rửa
-   chén rửa sau đặt lên chén rửa trước
    -> nhưng khi sử dụng thì lấy chén rửa ở trên (tức chén rửa sau cùng) => stack

### Queue - hàng đợi - cơ chế FILO(First In First Out) > ngược lại với < stack

> url: https://anonystick.com/blog-developer/hang-doi-tac-vu-va-vong-lap-su-kien-javascript-2021040333620077

-   Có một luồng chính
-   Và một hàng đợi - chứa các tác vụ không đồng bộ.
-> Khi thực hiện xong luồng chính
-> Kiểm tra các tác vụ không đồng bộ (thường được viết dưới dạng callback) -> tác vụ thỏa mãn điều kiện -> đưa vào luồng chính.
-> Khi hàng đợi được làm trống -> chương trình kết thúc quá trình thực thi.
<!-- ! nếu một tác vụ không đồng bộ không có hàm callback -> không được đưa vào luồng chính, vì hàm callback không được sử dụng để chỉ định thao tác tiếp theo.  -->

<!-- ----------------------------------------------------------------------- -->
<!--                              ## Event Loop                              -->
<!-- ----------------------------------------------------------------------- -->

## Event Loop

<!-- ? Làm cách nào để công cụ JavaScript biết được liệu một tác vụ không đồng bộ có kết quả hay không và liệu nó có thể vào chuỗi chính hay không? -->
<!-- * Câu trả lời là engine liên tục kiểm tra, lặp đi lặp lại, miễn là các tác vụ đồng bộ được thực thi, engine sẽ kiểm tra xem các tác vụ không đồng bộ bị treo có thể vào luồng chính hay không. Cơ chế kiểm tra vòng lặp kiểu này được gọi là vòng lặp sự kiện (Event Loop) -->

Vòng lặp sự kiện là một cấu trúc chương trình để chờ và gửi thông điệp và sự kiện (một cấu trúc lập trình chờ và gửi các sự kiện hoặc thông điệp trong một chương trình)".

> url: https://anonystick.com/blog-developer/event-loop-javascript-cung-giong-nhu-mot-nha-hang-pizza-20190503441197
> Ex: 1 người đến nhà hàng ([browser]) mua 2 món ăn: pizza (function1) và bánh mì (function2)
> -> quá trình đặt các nguyên liệu vào món ăn theo thứ tự:
> FILO: gọi là _call stack_
> FIFO: gọi là _call queue_
> -> giả sử món bánh mì thiếu nguyên liệu = một Event được kích hoạt (asynchronous function)
> -> cần đi mua nguyên liệu
> => vì không cần đợi nguyên liệu món thứ 2 nên món thứ 1 hoàn thành trước
> -> người quản lí = [event-table] => theo dõi các rủi ro (_events_) xảy ra theo thứ tự thời gian.article-text
> -> cậu bé đi mua nguyên liệu = [event-queue] => queue = phải chờ cậu bé mua nguyên liệu thành công rồi mới giao việc khác cho cậu bé
> => đầu bếp = [event-loop] > có nhiệm vụ liên tục thực hiên các đơn đặt hàng ( tất cả chức năng = [executing-all-the-functions])

EVENT LOOP:

-   kiểm tra xem các ngăn xếp (call stack) - còn trống không ? xem xét hàng đợi sự kiện = event queue - và thực hiện nó : ???