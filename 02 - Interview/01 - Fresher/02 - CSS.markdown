4. Điểm khác nhau của ID selector và Class selector trong CSS?
ID là duy nhất. Mỗi phần tử chỉ có thể có một ID và trang HTML chỉ có thể có một phần tử có ID đó

Class thì ngược lại. Bạn có thể sử dụng cùng một class trên nhiều phần tử và một phần tử có thể có nhiều class.

Mọi thông tin tạo kiểu cần được áp dụng cho nhiều đối tượng trên một trang nên được thực hiện với một class.

5. Làm thế nào để áp dụng các quy tắc CSS cụ thể cho một media?
Quy tắc @media được sử dụng trong các truy vấn media để áp dụng các kiểu khác nhau cho các loại/ thiết bị media khác nhau.

Ví dụ:

/* Change the background color of the any <div> element to "red" when the browser window is 600px wide or less */
@media only screen and (max-width: 600px) {
div {
    background-color: red;
}
}

6. Trong CSS Pseudo-class là gì?
Một Pseudo class trong CSS được dùng để xác định trạng thái đặc biệt của một phần tử. Nó có thể được kết hợp với một bộ chọn CSS (selector) để thêm hiệu ứng cho các phần tử hiện có dựa trên trạng thái của chúng.

/*
Any <a> element which the user's pointer is hovering will go green
*/
a:hover {
color: green;
}
/* Selects any <a> that has been visited and makes the text purple*/
a:visited {
color: purple;
}

7. Điểm khác biệt giữa relative, fixed, absolute và statically positioned element là gì?
Relative là phần tử được định vị tương đối so với vị trí bình thường của nó.
Fixed là phần tử được định vị liên quan đến cửa sổ trình duyệt.
Absolute là phần tử được đặt hoàn toàn vào vị trí gốc đầu tiên của nó.
Static đây là giá trị mặc định, tất cả các phần tử theo thứ tự khi chúng xuất hiện trong tài liệu.