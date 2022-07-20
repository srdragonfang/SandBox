# ****Bảng chú giải thuật ngữ JavaScript****

## **Hướng dẫn về một số thuật ngữ được sử dụng trong phát triển giao diện người dùng có thể xa lạ với bạn**

- [Không đồng bộ](https://tech-wiki.online/vn/javascript-glossary/#asynchronous):  gọi → quên → kết quả sẵn sàng → lấy lại mà không cần đợi kết quả.
    - promise
    - async & await
- Block = [Khối](https://tech-wiki.online/vn/javascript-glossary/#block):  phân tách bằng dấu ngoặc {}
- [Xác định phạm vi khối](https://tech-wiki.online/vn/javascript-glossary/#block-scoping)
- Callback = [Gọi lại](https://tech-wiki.online/vn/javascript-glossary/#callback): một hàm được gọi
- [Khai báo](https://tech-wiki.online/vn/javascript-glossary/#declarative)
- [Dự phòng](https://tech-wiki.online/vn/javascript-glossary/#fallback)
- [Phạm vi chức năng](https://tech-wiki.online/vn/javascript-glossary/#function-scoping)
- [Tính bất biến](https://tech-wiki.online/vn/javascript-glossary/#immutability)
- [Lexical Scoping](https://tech-wiki.online/vn/javascript-glossary/#lexical-scoping)
- [Polyfill](https://tech-wiki.online/vn/javascript-glossary/#polyfill)
- [Chức năng thuần túy](https://tech-wiki.online/vn/javascript-glossary/#pure-function)
- [Phân công lại](https://tech-wiki.online/vn/javascript-glossary/#reassignment)
- [Phạm vi](https://tech-wiki.online/vn/javascript-glossary/#scope)
- [Xác định phạm vi](https://tech-wiki.online/vn/javascript-glossary/#scoping)
- [Shim](https://tech-wiki.online/vn/javascript-glossary/#shim)
- [Tác dụng phụ](https://tech-wiki.online/vn/javascript-glossary/#side-effect)
- [Tiểu bang](https://tech-wiki.online/vn/javascript-glossary/#state)
- [Trạng thái](https://tech-wiki.online/vn/javascript-glossary/#stateful)
- [Không quốc tịch](https://tech-wiki.online/vn/javascript-glossary/#stateless)
- [Chế độ nghiêm ngặt](https://tech-wiki.online/vn/javascript-glossary/#strict-mode)
- [Cây rung](https://tech-wiki.online/vn/javascript-glossary/#tree-shaking)

## **Không đồng bộ [x]**

Mã không đồng bộ khi bạn bắt đầu một cái gì đó, hãy quên nó đi và khi kết quả sẵn sàng, bạn lấy lại nó mà không cần phải đợi nó. Ví dụ điển hình là một cuộc gọi AJAX, có thể mất thậm chí vài giây và trong thời gian chờ đợi bạn hoàn thành các công việc khác và khi phản hồi sẵn sàng, hàm gọi lại sẽ được gọi. Promise và async / await là cách hiện đại để xử lý async.

## **Khối [+]**

Trong JavaScript, một khối được phân tách bằng dấu ngoặc nhọn (`{}`). An`if`câu lệnh chứa một khối, một`for`vòng lặp chứa một khối.

## **Xác định phạm vi khối [+]**

Với chức năng[Xác định phạm vi](https://tech-wiki.online/javascript-glossary/#scoping), bất kỳ biến nào được xác định trong một khối đều có thể nhìn thấy và truy cập được từ bên trong toàn bộ[khối](https://tech-wiki.online/javascript-glossary/#block), nhưng không nằm ngoài nó.

## **Gọi lại**

Gọi lại là một hàm được gọi khi có điều gì đó xảy ra. Sự kiện nhấp chuột được liên kết với một phần tử có chức năng gọi lại được gọi khi người dùng nhấp vào phần tử. Một yêu cầu tìm nạp có một cuộc gọi lại được gọi khi tài nguyên được tải xuống.

## **Khai báo**

Cách tiếp cận khai báo là khi bạn cho máy biết bạn cần làm gì và bạn để nó tìm ra chi tiết. React được coi là có tính chất khai báo, vì bạn lý luận về các phần trừu tượng hơn là chỉnh sửa trực tiếp DOM. Mọi ngôn ngữ lập trình cấp cao đều mang tính khai báo nhiều hơn so với ngôn ngữ lập trình cấp thấp như Assembler. JavaScript mang tính khai báo nhiều hơn C. HTML mang tính khai báo.

## **Dự phòng**

Dự phòng được sử dụng để cung cấp trải nghiệm tốt khi người dùng không có quyền truy cập vào một chức năng cụ thể. Ví dụ: một người dùng duyệt với JavaScript bị vô hiệu hóa sẽ có thể có dự phòng cho phiên bản HTML thuần túy của trang. Hoặc đối với trình duyệt chưa triển khai API, bạn nên có dự phòng để tránh phá vỡ hoàn toàn trải nghiệm của người dùng.

## **Phạm vi chức năng**

Với chức năng[Xác định phạm vi](https://tech-wiki.online/javascript-glossary/#scoping), bất kỳ biến nào được xác định trong một hàm đều có thể nhìn thấy và truy cập được từ bên trong toàn bộ hàm.

## **Tính bất biến**

Một biến là bất biến khi giá trị của nó không thể thay đổi sau khi được tạo. Một biến có thể thay đổi có thể được thay đổi. Điều tương tự cũng áp dụng cho các đối tượng và mảng.

## **Lexical Scoping**

Lexical[Xác định phạm vi](https://tech-wiki.online/javascript-glossary/#scoping)là một loại phạm vi cụ thể có nghĩa là giá trị của một biến được xác định theo vị trí của nó khi nó được viết. Không phải khi nó được gọi, đó là điều gì đó xảy ra với phương án thay thế,*phạm vi động*(được sử dụng trong một số ngôn ngữ lập trình khác).

## **Polyfill**

Polyfill là một cách để cung cấp chức năng mới có sẵn trong JavaScript hiện đại hoặc API trình duyệt hiện đại cho các trình duyệt cũ hơn. Polyfill là một loại cụ thể của[miếng chêm](https://tech-wiki.online/javascript-glossary/#shim).

## **Chức năng thuần túy**

Một hàm không có tác dụng phụ (không sửa đổi các tài nguyên bên ngoài) và đầu ra của nó chỉ được xác định bởi các đối số. Bạn có thể gọi hàm này 1 triệu lần và cho cùng một tập hợp các đối số, kết quả đầu ra sẽ luôn giống nhau.

## **Phân công lại**

JavaScript với`var`và`let`khai báo cho phép bạn gán lại một biến vô thời hạn. Với`const`tuyên bố bạn khai báo một cách hiệu quả[bất biến](https://tech-wiki.online/javascript-glossary/#immutability)giá trị cho chuỗi, số nguyên, boolean và một đối tượng không thể được gán lại (nhưng bạn vẫn có thể sửa đổi nó thông qua các phương thức của nó).

## **Phạm vi**

Phạm vi, được gọi là một biến, trong phần nào của chương trình mà biến đó được hiển thị.`let`và`const`có phạm vi khối, xác định phạm vi mạng khác với các giá trị được xác định bằng cách sử dụng`var`, có phạm vi chức năng.

## **Xác định phạm vi**

Phạm vi là cách một ngôn ngữ lập trình xác định phạm vi của các biến và hàm. Ví dụ, chúng ta có thể có phạm vi khối, phạm vi chức năng, phạm vi từ vựng.

## **Shim**

Một miếng đệm lót là một lớp bao bọc nhỏ xung quanh một chức năng hoặc API. Nó thường được sử dụng để tóm tắt một cái gì đó, điền trước các thông số hoặc thêm một[polyfill](https://tech-wiki.online/javascript-glossary/#polyfill)cho các trình duyệt không hỗ trợ một số chức năng. Bạn có thể coi nó giống như một lớp tương thích.

## **Tác dụng phụ**

Hiệu ứng phụ là khi một chức năng tương tác với một số chức năng hoặc đối tượng khác bên ngoài nó. Tương tác với mạng hoặc hệ thống tệp, hoặc với giao diện người dùng, đều là tác dụng phụ.

## **Tiểu bang**

State thường phát huy tác dụng khi nói về Thành phần. Một thành phần có thể là trạng thái nếu nó quản lý dữ liệu của chính nó hoặc không trạng thái nếu nó không.

## **Trạng thái**

Một thành phần, chức năng hoặc lớp có trạng thái quản lý trạng thái (dữ liệu) của chính nó. Nó có thể lưu trữ một mảng, một bộ đếm hoặc bất cứ thứ gì khác.

## **Không quốc tịch**

Một thành phần, hàm hoặc lớp không trạng thái cũng được gọi là*câm*bởi vì nó không có khả năng có dữ liệu riêng để đưa ra quyết định, vì vậy đầu ra hoặc trình bày của nó hoàn toàn dựa trên các đối số của nó. Điều này ngụ ý rằng[chức năng thuần túy](https://tech-wiki.online/javascript-glossary/#pure-function)không quốc tịch. Lưu ý: trong React, những gì chúng ta từng gọi là các thành phần không trạng thái giờ được gọi là các thành phần chức năng vì hook cung cấp cho chúng khả năng sử dụng trạng thái.

## **Chế độ nghiêm ngặt**

Chế độ nghiêm ngặt là một tính năng mới của ECMAScript 5.1, khiến thời gian chạy JavaScript gặp nhiều lỗi hơn, nhưng nó giúp bạn cải thiện mã JavaScript bằng cách từ chối các biến không được khai báo và những thứ khác có thể gây ra các vấn đề bị bỏ qua như thuộc tính đối tượng trùng lặp và những thứ tinh vi khác. Gợi ý: sử dụng nó. Lựa chọn thay thế là "chế độ cẩu thả", đó không phải là một điều tốt ngay cả khi nhìn vào tên mà chúng tôi đã đặt cho nó.

## **Cây rung**

Rung cây có nghĩa là loại bỏ "mã chết" khỏi gói bạn gửi cho người dùng của mình. Nếu bạn thêm một số mã mà bạn không bao giờ sử dụng trong các câu lệnh nhập của mình, mã đó sẽ không được gửi đến người dùng ứng dụng của bạn, để giảm kích thước tệp và thời gian tải.

Tải xuống miễn phí của tôi[Sổ tay dành cho Người mới bắt đầu JavaScript](https://tech-wiki.online/page/javascript-handbook/)