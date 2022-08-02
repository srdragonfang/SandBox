8. PUT và POST khác nhau như thế nào?
PUT: Thay thế tài nguyên đích bằng payload yêu cầu. Có thể được sử dụng để cập nhật hoặc tạo một tài nguyên mới.

POST: Thực hiện xử lý tài nguyên cụ thể trên payload. Có thể được sử dụng cho các hành động khác nhau bao gồm tạo tài nguyên mới, tải lên tệp hoặc gửi biểu mẫu web.

9. Long-Polling, Websockets và Server-Sent Events khác nhau thế nào?
Long-Polling mở một yêu cầu HTTP và vẫn mở cho đến khi nhận được bản cập nhật. Khi nhận được bản cập nhật, một yêu cầu mới sẽ được mở ngay lập tức khi vẫn đang chờ bản cập nhật tiếp theo.
Websocket Giao thức WebSocket cho phép giao tiếp liên tục, hai chiều giữa máy chủ và máy khách. Đối với thử nghiệm này, Primus được sử dụng để tóm tắt nhiều hoạt động của giao thức.
Server-Sent Event Các sự kiện do máy chủ gửi dựa trên kết nối HTTP lâu dài, nơi các bản cập nhật liên tục được gửi đến máy khách.
10. Sự khác biệt giữa cookies, session storage, and local storage?
Local storage như tên gọi (bộ nhớ cục bộ) là bộ nhớ của trình duyệt, có khả năng lưu trữ vô thời hạn lên tới 10MB, session storage (bộ nhớ phiên) cũng như vậy, nhưng như tên gọi của nó, bộ nhớ này dựa trên phiên và sẽ bị xóa sau khi đóng trình duyệt của bạn. Bộ nhớ phiên lưu trữ được ít hơn, lên đến 5MB.

Cookie là dữ liệu rất nhỏ lưu trữ trong trình duyệt, có thể lưu trữ đến 4KB và có thể được truy cập thông qua máy chủ hoặc trình duyệt.

11. CORS là gì?
CORS là viết tắt của Cross-Origin Resource Sharing.

CORS là một cơ chế trình duyệt cho phép truy cập có kiểm soát vào các tài nguyên nằm bên ngoài một miền nhất định. Nó mở rộng và thêm tính linh hoạt cho chính sách cùng nguồn gốc.

12. Promise là gì?
Promise được dùng để xử lý các hoạt động bất đồng bộ. Chúng có thể xử lý nhiều hoạt động bất đồng bộ một cách dễ dàng và cung cấp khả năng xử lý lỗi tốt hơn so với callback và event.

13. Các state khác nhau trong promise?
Một promise có 3 state:

fullfilled: hoàn thành
rejected: lỗi/ không thể hoàn thành
pending: đang chờ
14. Hoisting trong JavaScript là gì?
Hoisting là một thuật ngữ được dùng để mô tả sự di chuyển của các biến và hàm lên đầu phạm vi của chúng, ở đấy chúng ta có thể xác định được biến hoặc hàm đó.

15. Các giá trị falsy trong JavaScript là gì?
Là giá trị khi được chuyển đổi thành boolean sẽ trở thành sai.

Bất kỳ giá trị nào dưới đây:

''
0
null
undefined
NaN
false
-0
0n // BigInt, when used as a boolean, follows the same rule as a Number