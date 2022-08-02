Trước tiên, chúng ta cần cài thêm một module cho phép gọi api có tên axios bằng cách sử dụng dòng lệnh:

```node
npm i axios
```
Bạn có thể tham khảo thêm về module này bằng cách truy cập vào trang tài liệu chính thức của nó. Tiếp theo, chúng ta sẽ tạo một component và import các thư viện cần thiết vào:

```jsx
//Gọi React và useState
import React, { useState } from "react";
import axios from "axios"; //Sử dụng axios

// Khởi tạo component giúp hiển thị danh sách người dùng:

//Component hiển thị danh sách người dùng
const ShowUser = (props) => {
  //Lấy giá tri của props listUser
  const { listUser } = props;

  // Render ra list user
  // React.Fragment cho phép bọc JSX lại.
  // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
  return (
    <div>
      {listUser.map((user, index) => {
        return (
          <React.Fragment key={user.id}>
            <ul>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};
```
Sau đó khởi tạo component gọi API và hiển thị giao diện.
```jsx
export default function App(props) {
  //Khai báo state, sử dụng hook: useState
  const [listUser, setListUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //API chứa dữ liệu người dùng
  const getUserAPI =
    "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

  //Hàm fetch API để lấy dữ liệu ng. dùng
  const getUser = () => {
    //Cập nhật lại giá trị của state loading
    setLoading(true);

    //Thực hiện gọi api
    axios
      .get(getUserAPI)
      .then((res) => {
        //Cập nhật giá trị của state listUser
        setListUser(res.data);
      })
      .catch((err) => {
        //Trường hợp xảy ra lỗi
        alert("Không thể kết nối tới server");
      })
      .finally(() => {
        // Câu lệnh trong này được khởi chạy mỗi khi call API xong
        // bất kể thất bại hay không.
        // ...
        setLoading(false); //Cập nhật giá trị của state isLoading
      });
  };

  return (
    <>
​      <code>freetuts.net</code> <br />
      {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>}
      <ShowUser listUser={listUser} />
    </>
  );
}
```
Ở đây mình viết luôn vào file src/App.js của dự án nên sau khi gộp các phần ở trên, chúng ta sẽ có file App.js hoàn chỉnh:

```jsx
//Gọi React và useState
import React, { useState } from "react";
import axios from "axios"; //Sử dụng axios

//Component hiển thị danh sách người dùng
const ShowUser = (props) => {
  //Lấy giá tri của props listUser
  const { listUser } = props;

  // Render ra list user
  // React.Fragment cho phép bọc JSX lại.
  // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
  return (
    <div>
      {listUser.map((user, index) => {
        return (
          <React.Fragment key={user.id}>
            <ul>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default function App(props) {
  //Khai báo state, sử dụng hook: useState
  const [listUser, setListUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //API chứa dữ liệu người dùng
  const getUserAPI =
    "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

  //Hàm fetch API để lấy dữ liệu ng. dùng
  const getUser = () => {
    //Cập nhật lại giá trị của state loading
    setLoading(true);

    //Thực hiện gọi api
    axios
      .get(getUserAPI)
      .then((res) => {
        //Cập nhật giá trị của state listUser
        setListUser(res.data);
      })
      .catch((err) => {
        //Trường hợp xảy ra lỗi
        alert("Không thể kết nối tới server");
      })
      .finally(() => {
        // Câu lệnh trong này được khởi chạy mỗi khi call API xong
        // bất kể thất bại hay không.
        // ...
        setLoading(false); //Cập nhật giá trị của state isLoading
      });
  };

  return (
    <>
      <code>freetuts.net</code> <br />
      {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>}
      <ShowUser listUser={listUser} />
    </>
  );
}
```
Khởi chạy dự án bằng cách gõ dòng lệnh:
```node
npm start
```
Trên đây chúng ta đã cùng nhau đi tìm hiểu về useState trong ReactJS Hook. Đây là kiến thức rất cơ bản về nó nhưng cũng hết sức quan trọng trong quá trình làm việc với ReactJS sau này. Mong rằng bài viết sẽ giúp ích cho bạn.