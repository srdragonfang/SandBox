# Khi nào nên dùng e mà khi nào không?
```js
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
```


* event = trái tim của các ứng dụng web sử dụng javascript.
* ! không có events cũng sẽ không có scripts.
* Vì vậy events là trung tâm của javascript trong quá trình tăng tương tác với người dùng. Khi người dùng thực hiện 1 hành động sẽ tạo ra event. Khi mà những script đã viết trong web phản ứng lại event đó cũng là lúc sự tương tác được sinh ra.

1. Đăng ký một event handling
2. Truy cập vào event
3. Truy cập vào HTML element
Có 2 cách là sử dụng từ khoá [this] hoặc sử dụng thuộc tính [target/srcElement].
Cách an toàn nhất là sử dụng từ khoá this. this không phải lúc nào cũng trỏ đến đúng HTML element, nhưng lại rất phù hợp khi sử dụng với mô hình event truyền thống.
```js
function showAlert(e) {
  if (!e) var e = window.event
  // e sẽ trỏ đến event
  // this trỏ đến HTML element mà nó handle
  // target/srcElement trỏ đến HTML element mà event diễn ra ban đầu
}
```
Thuộc tính target/srcElement lưu trữ 1 tham chiếu đến HTMl element mà event diễn ra ban đầu. Nó rất hữu ích, nhưng khi event capture hoặc bubble thì target/srcElement không thay đổi, nó vẫn là HTML element mà event diễn ra ban đầu.


4. Đọc các thuộc tính trong event

Các thuộc tính này sẽ rất dễ bị bug sử dụng trên nhiều trình duyệt khác nhau. Nên khi sử dụng các thuộc tính này chúng ta nên cân nhắc tính khả dụng của nó để hạn chế khả năng xảy ra bug.

Để chắc chắn tính khả thi của thuộc tính thì đầu tiên hãy kiểm tra thuộc tính đó có tồn tại không rồi sau đó mới sử dụng.
```js
function showAlert(e) {
  if (!e) var e = window.event
  alert(e.type)
}
```
5. Event order

Cuối cùng là chúng ta sẽ quyết định xem liệu mình có muốn event bubble up (event sẽ được pass lên cả element cha). Nếu chúng ta không muốn chúng ta có thể chặn nó.

```js
function showALert() {
  if (!e) var e = window.event
  // handle event
  e.cancelBubble = true
  if (e.stopPropagation) e.stopPropagation()
}
```
III. Tổng kết
Bài chia sẻ của mình đến đây là hết. Thì bài này chỉ nhằm giới thiệu lại chi tiết nhất có thể về event. Còn những phần kiến thức liên quan thì mình sẽ tìm hiểu thêm và trình bày trong những bài tiếp theo.

Với những gì mình trình bày thì mong muốn chúng ta sẽ có cái nhìn khái quát về event để từ đó chúng ta sẽ đánh sâu vào chi tiết giúp hiểu rõ hơn về hoạt động của event nói riêng và javascript nói chung và nâng cao kiến thức và có nhiều hơn hướng xử lý những vấn đề liên quan đến event và javascript.