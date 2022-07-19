# Javascript

## Vì sao javascript là mô hình đơn luồng
>url: https://anonystick.com/blog-developer/javascript-su-dung-don-luong-ly-do-tai-sao-2021040171820607
Hoạt động không đồng bộ javascript
Đây chính là mục tiêu của tôi muốn đề cập đến cho các bạn, thật ra nó rất nhiều điều để bàn đến ở đây: 
* JavaScript chỉ chạy trên một luồng 
* Tác vụ đồng bộ và tác vụ không đồng bộ trong javascript 
* Hàng đợi tác vụ và vòng lặp sự kiện 
* Chế độ hoạt động không đồng bộ 
* Kiểm soát quá trình hoạt động không đồng bộ javascript
Vì vậy đầu tiên chúng ta sẽ tìm hiểu khái niệm như tiêu đề của nó "JavaScript sử dụng đơn luồng lý do tại sao?"
- Mô hình đơn luồng = Nói cách khác, JavaScript chỉ có thể thực hiện một tác vụ tại một thời điểm và các tác vụ khác phải được xếp hàng sau.
<!-- ! Lưu ý rằng JavaScript chỉ chạy trên một luồng, không có nghĩa là công cụ JavaScript chỉ có một luồng. -->

Trên thực tế, JavaScript engine có nhiều luồng, một tập lệnh đơn chỉ có thể chạy trên một luồng (được gọi là luồng chính) và kết hợp với các luồng khác trong background. 


<!-- ----------------------------------------------------------------------- -->
<!--                            ## Stack & Queue                             -->
<!-- ----------------------------------------------------------------------- -->
## Stack & Queue - hàng đợi
### Stack - cơ chế FILO(Last In First Out)
- có một chồng chén vừa được rửa
- chén rửa sau đặt lên chén rửa trước
-> nhưng khi sử dụng thì lấy chén rửa ở trên (tức chén rửa sau cùng) => stack
### Queue - hàng đợi - cơ chế FILO(First In First Out) > ngược lại với < stack
> url: https://anonystick.com/blog-developer/hang-doi-tac-vu-va-vong-lap-su-kien-javascript-2021040333620077
- Có một luồng chính
- Và một hàng đợi - chứa các tác vụ không đồng bộ.
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
Ex: 1 người đến nhà hàng ([browser]) mua 2 món ăn: pizza (function1) và bánh mì (function2)
-> quá trình đặt các nguyên liệu vào món ăn theo thứ tự:
FILO: gọi là *call stack*
FIFO: gọi là *call queue*
-> giả sử món bánh mì thiếu nguyên liệu = một Event được kích hoạt (asynchronous function)
-> cần đi mua nguyên liệu
=> vì không cần đợi nguyên liệu món thứ 2 nên món thứ 1 hoàn thành trước 
-> người quản lí = [event-table] => theo dõi các rủi ro (*events*) xảy ra theo thứ tự thời gian.article-text
-> cậu bé đi mua nguyên liệu = [event-queue] => queue = phải chờ cậu bé mua nguyên liệu thành công rồi mới giao việc khác cho cậu bé
=> đầu bếp = [event-loop] > có nhiệm vụ liên tục thực hiên các đơn đặt hàng ( tất cả chức năng = [executing-all-the-functions])

EVENT LOOP: 
- kiểm tra xem các ngăn xếp (call stack) - còn trống không ? xem xét hàng đợi sự kiện = event queue - và thực hiện nó : ???
## Hoisting
## Function

### đồng bộ
### bất đồng bộ
- promise, callback, async/await
- Ngoài ra rộng hơn nữa bạn phải nắm những khái niệm như Blocking IO, noBlocking IO, và đồng bộ và bất đồng bộ.
- Nói nhanh về bất đồng bộ hiểu nôm na là một người có thể làm được nhiều việc một lúc, có thể vừa đánh răng mà vừa xem phim... và ngược lại. 
### callback

## Array

## Object

## Recursion - Đệ Quy

## JSON
JSON là viết tắt của *JavaScript Object Notation*, là một *bộ quy tắc* về *cách trình bày và mô tả dữ liệu* trong một chuỗi lớn thống nhất được gọi chung là chuỗi JSON.

Nhu cầu trao đổi dữ liệu giữa các nền tảng và công nghệ khác nhau ngày càng lớn. Lúc này, XML trở nên cồng kềnh và làm nặng dữ liệu bởi cấu trúc thẻ của nó. Điều đó dẫn tới nhu cầu tạo ra một loại dữ liệu mới có tên gọi là JSON nhằm giải quyết vấn đề trao đổi dữ liệu giữa các nền tảng và làm nhẹ dung lượng lưu trữ của dữ liệu trao đổi.

Chuỗi  JSON  được bắt đầu bằng ký tự  {  và kết thúc bởi ký tự  } .
JSON.parse() -> object javascript
JSON.stringify(object) -> JSON string
https://hocjavascript.net/json/truyen-du-lieu-json-voi-javascript/