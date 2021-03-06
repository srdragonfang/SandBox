---
title: "Title"
author: "S.R Dragonfang"
date: "August 02, 2022"
---


<style type="text/css">
details {
font-size: 14px;
line-height: 1.5;
}
textarea {
    resize: none; 
    font-size: 16px; 
    line-height: normal; 
    padding: 1rem;
    background: transparent;
    color: #fff;
}
</style>

<div align="center">
<h1>HTML</h1>
</div>

# <div align="center" style="font-size: 16px; font-weight: bold; color: red;">HTML</div>

# Tag Name

### Điểm khác nhau của thẻ `<span>` và `<div>` là gì?
<details>

-   span là phần tử nội tuyến (inline).

-   div là phần tử khối (block).

-   Bạn nên dùng các thẻ div để chứa (bọc) các phần của tài liệu, còn các thẻ span để chứa các phần nhỏ của văn bản, hình ảnh, v…v…

-   Lưu ý: Không được đặt một phần tử cấp khối trong một phần tử nội tuyến.

Ví dụ:

`<div>Hi<span>I'm the start of the span element <div>I'm illegal</div> I'm the end of the span</span> Bye I'm the end of the div</div>`

</details>

---

### Các thẻ Meta là gì?

<details>
Thẻ meta là các đoạn văn bản mô tả nội dung của trang; các thẻ meta không xuất hiện trên chính trang mà chỉ xuất hiện trong mã nguồn của trang.

Các thẻ meta về cơ bản chính là các mô tả nội dung nhỏ giúp cho các công cụ tìm kiếm biết nội dung của một trang web.

Ví dụ:

```html
<head>
<meta charset="UTF-8" />
<meta name="description" content="Description search engines use" />
<meta name="keywords" content="Keywords, of, your, page" />
<meta name="author" content="Me" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

</details>

---

### HTML là gì?

<details>
HTML viết tắt của Hyper Text Markup Language (ngôn ngữ đánh dấu siêu văn bản). Nó là một ngôn ngữ của World Wide Web. Đây là một ngôn ngữ định dạng văn bản chuẩn được sử dụng để tạo và hiển thị các trang trên Web.

</details>

---

### Thẻ HTML là gì?

<details>

Các thẻ HTML bao gồm ba phần: mở thẻ, nội dung và đóng thẻ. Một số thẻ là thẻ mở, có nghĩa là không cần phải đóng thẻ.

Tài liệu HTML được tạo ra từ hai điều sau:

Nội dung
Các thẻ
Trong đó, nội dung được đặt giữa các thẻ để hiển thị dữ liệu trên trang web.

</details>

---

### Có phải tất cả các thẻ HTML đều có thẻ đóng?

<details>

Không. Có một vài thẻ trong html mà không cần phải đóng thẻ ví dụ thẻ `<image>, <br>, <hr>...`

</details>

---

### Các danh sách phổ biến được sử dụng khi thiết kế một trang là gì?

<details>
Có nhiều danh sách phổ biến được sử dụng để thiết kế một trang. Có loại danh sách sau đây:

Danh sách có thứ tự
Danh sách không có thứ tự
Danh sách menu
Danh sách từ điển
Danh sách định nghĩa

</details>

---

### Sự khác nhau giữa các phần tử và các thẻ trong HTML

<details>
Các thành phần HTML giao tiếp với trình duyệt để hiển thị văn bản. Khi các phần tử được bao quanh bởi dấu ngoặc, chúng sẽ tạo thành các thẻ HTML. Hầu như mọi lúc, các thẻ đi theo cặp và có nội dung bên trong.
<details>

### HTML ngữ nghĩa là gì?
<details>
HTML ngữ nghĩa là một kiểu code. Đó là việc sử dụng các thẻ HTML để củng cố ngữ nghĩa hoặc ý nghĩa của nội dung. Ví dụ: Trong thẻ ngữ nghĩa HTML <b> </b> không được sử dụng để hiển thị dòng chữ đậm, cũng như thẻ <i> </i> không được sử dụng để hiển thị cho chữ nghiêng. Thay vào đó chúng ta sử dụng các thẻ <strong></strong> and <em></em>.
</details>

---

### Bản đồ hình ảnh là gì?

<details>
Bản đồ hình ảnh cho phép bạn liên kết nhiều trang web khác nhau bằng một hình ảnh duy nhất. Bạn có thể định nghĩa mỗi phần của một bản đồ hình ảnh là các hình dạng khác nhau.
</details>

---

### Làm thế nào để chèn một biểu tượng bản quyền vào trang web?
<details>
Có thể chèn một biểu tượng bản quyền bằng cách sử dụng &copy; or &#169; vào file HTML
</details>

---

### Làm thế nào để giữ các phẩn tử danh sách thẳng trong file HTML?
<details>
Bạn có thể giữ các phẩn tử danh sách thẳng bằng cách sử dụng indent.
</details>

---

10. Một siêu liên kết (hyperlink) chỉ áp dụng cho văn bản đúng không?

<details>
Không. Siêu liên kết được áp dụng cho cả văn bản và hình ảnh.
</details>

---

11. Style sheet là gì?

<details>
Một style sheet được sử dụng để xây dựng kiểu dáng thích hợp, thiết kế tốt cho trang web. Bạn có thể thêm các mẫu này vào một số trang web khác nhau.
</details>

---

### Bạn có thể tạo một văn bản nhiều màu trên một trang web?

<details>
Có. Để tạo văn bản nhiều màu trên một trang web bạn có thể sử dụng thẻ font cho từng văn bản cụ thể mà bạn muốn.

```html
<font color ="color"></font> 
```
</details>

---

### Marquee là gì?


<details>
Thẻ marquee trong HTML không phải là một thẻ HTML tiêu chuẩn, được sử dụng để di chuyển chữ hoặc ảnh theo chiều ngang hoặc dọc một cách tự động. Có nghĩa là bạn có thể làm cho chữ hoặc ảnh di chuyển lên trên, xuống dưới, sang trái, sang phải một cách tự động.
</details>

---

14. Có bao nhiêu thẻ được sử dụng để phân tách các đoạn văn?

<details>
Có ba thẻ được sử dụng để tách văn bản. Thẻ <br> thường được sử dụng để xuống dòng, các thẻ khác là <p> và <blockquote>
</details>

---

15. Làm thế nào để tạo ảnh nền cho một trang web?
Để tạo một hình ảnh nền trên một trang web, bạn nên đặt mã thẻ sau đây sau thẻ </head>.

?
1

<body background = "image.jpg">  
Thay thế "image.jpg" thành đường dẫn đến hình ảnh của bạn.
</details>

---

### Các phần tử rỗng là gì?

<details>
Phần tử HTML không có nội dung được gọi là phần tử rỗng. 
Ví dụ `<br>, <hr>,...`
</details>

---

### Thẻ span được sử dụng làm gì? Lấy một ví dụ.

#tag

<details>
Thẻ span là thẻ trung tính được sử dụng làm những việc sau:
Để thêm màu vào văn bản.
Để thêm nền trên văn bản.
Đánh dấu bất kỳ văn bản bằng màu nào. vv
Ví dụ:
```html
<p>  
<span style="color:#ffffff;">  
Sử dung thẻ span thay đổi màu văn bản.
</span>  
</p>
```
</details>

---

### Sử dụng thẻ iframe để làm gì?

<details>
Thẻ iframe được sử dụng để hiển thị một trang web trong một trang web khác.

```html
<!-- Cấu trúc: -->
<iframe src="URL"></iframe>
<!-- Ví dụ: -->
<iframe src="demo_iframe.html" width="200px" height="200px"></iframe>
<!-- Target đến một liên kết: -->
<iframe src="" name="iframe_a"></iframe>
```

</details>

---

### Canvas trong HTML 5 là gì?

<details>
Canvas là một khoảng trống HTML được sử dụng để vẽ đồ họa.
</details>

# Document Objects Model

### DOM trong HTML là gì?

<details>
DOM (The Document Object Model) là một giao diện lập trình cho các document HTML. Nó đại diện cho trang để các chương trình có thể thay đổi cấu trúc, kiểu và nội dung của tài liệu. DOM đại diện cho tài liệu dưới dạng các nút và đối tượng.
</details>

---
