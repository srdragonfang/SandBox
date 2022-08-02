---
title: "The Lullaby Of RedEyes"
author: "S.R Dragonfang"
date: "August 02, 2022"
---

<div align="center" style="margin-top: 10px;">
    The Lullaby Of Soknmaru
</div>

# PART I: Hyper Text Markup Language

## <u>I. INTRODUCTION</u>
### HTML là gì?

<details>

*Translate*: **Ngôn ngữ đánh dấu siêu văn bản.**

* Được sử dụng để định dạng và hiển thị văn bản trên trình duyệt.
* Xương sống của một website
Hyper Text: siêu văn bản có nghĩa là "văn bản trong văn bản". Một văn bản có chứa một liên kết (link) là một siêu văn bản. Mỗi lần bản click vào một từ từ đó đưa bạn tới một trang web mới, đó là siêu văn bản.

Markup Language: ngôn ngữ đánh dấu là một ngôn ngữ lập trình được sử dụng để giúp văn bản dễ tương tác và linh động hơn. Nó có thể đặt văn bản vào trong các ảnh, bảng, liên kết...
</details>

--- 
### Các thẻ trong HTML?

<details>
Chứa 3 phần chính:

    1 - thẻ mở
    2 - thẻ nội dung.
    3 - thẻ đóng

Có một số thẻ có thẻ mở không cần thẻ đóng.

Các loại thẻ: 

    1 - HTML Meta
        DOCTYPE, title , link, meta, style
    2 - HTML Văn bản
        <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
        <br> = là thẻ xuống dòng
        <strong> = in đậm
        <em> = in nghiêng
        <code>
        <abbr>
        <acronym>
        <address>
        <bdo>
        <blockquote>
        <cite>
        <q>
        <ins>
        <del>
        <dfn>
        <kbd>
        <pre>
        <samp>
        <var>
    3 - HTML links
        <a href=""></a>
        <base>
    4 - HTML hình ảnh và đối tượng
        <img src="http://placehold.it/500x300" alt="place">
        <area>
        <map>
        <param>
        <object>
    5 - HTML table
        <table>	Định nghĩa bảng.
        <tr>	Định nghĩa một hàng trong một bảng.
        <th>	Định nghĩa phần header (dòng đầu tiên) của bảng.
        <td>	Định nghĩa 1 ô của bảng.
        <caption>	Định nghĩa phụ đề bảng.
        <colgroup>	Chỉ định một nhóm của một hoặc nhiều cột trong một bảng để định dạng.
        <col>	Được sử dụng với thẻ <colgroup> để chỉ định thuộc tính cột cho mỗi cột.
        <tbody>	Được sử dụng để nhóm nội dung body trong một bảng.
        <thead>	Được sử dụng để nhóm nội dung header trong một bảng.
        <tfooter>	Được sử dụng để nhóm nội dung footer trong một bảng.
        
    6 - HTML form
        form
        input
        textarea
        select
        option
        optgroup
        button
        label
        fieldset
        legend
    7 - HTML Scripting
        script
        noscript
</details>

---

### Định dạng trong HTML

<details>

```html
    <p>
        <b>In đậm</b>

        <i>In nghiêng</i>

        <i>Gạch chân</i>

        <mark>Highlight text</mark>

        <strike>Chữ bị kẻ ngang</strike>

        <tt>Các kí tự có độ rộng bằng nhau </tt>

        <sup>Mũ trên</sup>

        <sub>Mũ dưới</sub>

        <del>Chữ bị xóa - gạch ngang</del>

        <ins> Đây là chữ được chèn vào.</ins>

        <big> Chữ to hơn. </big>

        <small> Chữ nhỏ hơn. </small>

    </p>   

```

</details>

---

### Tiêu đề?

<details>
    h1, h2, h3, h4, h5, h6
</details>

---

### List trong HTML

<details>
Danh sách trong HTML được sử dụng để hiển thị danh sách thông tin. Có ba loại khác nhau của danh sách HTML:

    1 - Danh sách có thứ tự hay danh sách có đánh số (ol)
<details>

    type="1"	Đây là kiểu mặc định, ở đó các danh mục được đánh bằng các con số.

    type="I"	Với kiểu này, danh mục được đánh bằng các ký tự La Mã.

    type="i"	Với kiểu này, danh mục được đánh bằng các ký tự La Mã thường.
 
    type="A"	Với kiểu này, danh mục được đánh bằng các ký tự chữ hoa.
 
    type="a"	Với kiểu này, danh mục được đánh bằng các ký tự chữ thường.

```html
<!-- example -->
<ol type="I">  
 <li>HTML</li>  
 <li>Java</li>  
 <li>JavaScript</li>  
 <li>SQL</li>  
</ol>

<ol type="I" start="5">  
 <li>HTML</li>  
 <li>Java</li>  
 <li>JavaScript</li>  
 <li>SQL</li>  
</ol>

<!-- thuộc tính start = bắt đầu từ vị trí -->
<!-- I = 1, V = 5 -->
```
</details>
    2 - Danh sách không có thứ tự (ul)

        type="disc"	Dây là kiểu mặc định, danh mục được đánh bằng các ký tự hình tròn.

        type="circle"	Với kiểu này, danh mục được đánh bằng các ký tự đường tròn.

        type="square"	Với kiểu này, danh mục được đánh bằng các ký tự hình vuông.

        type="none"	Với kiểu này, danh mục không được đánh bằng ký tự gì.

    3 - Danh sách mô tả (dl)
```html
<dl>  
  <dt> Bạch Dương </dt>  
  <dd> - Một trong 12 cung tử vi. </dd>  
  <dt> Bingo </dt>  
  <dd> - Là một món ăn </dd>  
  <dt> Leo </dt>  
  <dd> - Là một trong 12 cung tử vi. </dd>  
  <dt> Oracle </dt>  
  <dd> - Là một tập đoàn công nghệ đa quốc gia. </dd>   
</dl>  
```

</details>

---
---
---
## <u>II. FORM</u>

### HTML Form là gì?

<details>
Một HTML Form là một phần của trang web có chứa các điều khiển như các trường văn bản, các trường mật khẩu, các checkbox, các radio button, submit button, các menu...

HTML Form là phương tiện cho người dùng nhập dữ liệu được gửi đến máy chủ để xử lý.
</details>

---

### Tại sao sử dụng HTML Form?
<details>
HTML Form được sử dụng khi bạn muốn thu thập một số dữ liệu của người truy cập trang web.

Ví dụ: Nếu người dùng muốn mua một số mặt hàng trên online, họ phải điền vào form các thông tin như địa chỉ giao hàng và chi tiết thẻ tín dụng / thẻ ghi nợ để có thể gửi hàng đến địa chỉ đó.
```html
<form>  
  <label for="email">Email: </label>  
  <input type="email" id="email" name="email"/> <br/>  
</form>
<!-- for sẽ được gán bởi tên của name -->
```
</details>

## <u>HTML Methods</u>

**id**	
> Chỉ định một id duy nhất của một phần tử

**class**	
> Chỉ định một hoặc nhiều tên class cho một phần tử (tham chiếu đến một class trong một style sheet)
 
**contenteditable**
> Chỉ định nội dung có được sửa hay không

**contextmenu**
> Chỉ định một menu ngữ cảnh cho một phần tử. Menu đó hiển thị khi người dùng right-clicks vào phần tử đó

**data-***
> Được sử dụng để lưu trữ dữ liệu tùy chỉnh cho trang hoặc ứng dụng

**dir**
> Chỉ định hướng của văn bản cho nội dung trong một phần tử

**draggable**
> Chỉ định một phần tử có thể kéo thả được hay không

**dropzone**
> Chỉ định liệu dữ liệu được kéo được sao chép, di chuyển hoặc liên kết, khi bị thả ra

**hidden**
> Được sử dụng để ẩn một phần tử


**lang**
> Chỉ định ngôn ngữ của nội dung của phần tử

**spellcheck**
> Chỉ định xem phần tử có được kiểm tra chính tả và ngữ pháp hoặc không

**style**	
> Chỉ định một kiểu CSS nội tuyến cho một phần tử

**tabindex**
> Chỉ định thứ tự tab của một phần tử

title
> Chỉ định thông tin mở rộng về một phần tử

**translate**
> Chỉ định nội dung của một phần tử phải được dịch hay không

**accesskey**
> Chỉ định một phím tắt để activate/focus một phần tử
