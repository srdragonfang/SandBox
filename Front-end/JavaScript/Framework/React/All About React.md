Một gia đình A nọ.

Có:
Cha = component () {
    ADN-Y
    info = {
        [name: "Yan"],
        [age: 33],
        [job: "dev"]
    }

}

Me = component X () {
    ADN-X
    info = {
        [name: "Xaxa"],
        [age: 31],
        [job: "tester"]
    }
}

Con = component Z () {
    ADN-X
    ADN-Y
    info = {
        [name: "Zero"],
        [age: 11],
        [job: ""]
    }
}

componet cha !== component mẹ
có chung component con
ADN = props
info = state

Cháu = component W () {
    ADN-XY
    <!-- ADN-Y -->
    info = {
        [name: "Wonder"],
        [age: 13],
        [job: ""]
    }
}

component cháu chỉ thừa hưởng ADN (prop) từ component ông nội thông qua component cha
mỗi component có một state hoạt động trong phạm vi component
có thể thao tác dễ dàng với state thông qua class function (CĂN CƯỚC CÔNG DÂN)

Một state:
 - được khởi tạo
```js
    this.state = {name: "Wonder"}
```
 - được gọi
```js
    console.log(this.state.name)
```
    được cập nhật
```js
    this.setState({age: 15})
```
    lấy giá trị của state trước khi được cập nhật
```js
    this.setState((state) => {
        return newAge;
    })
```

**WARNING:** Trong hầu hết các trường hợp bạn nên khởi tạo state bên trong hàm constructor() để tránh gặp các lỗ không mong muốn. Vì đây sẽ là hàm khởi chạy đầu tiên khi một components được gọi.

* typeof props = object
* typeof state = object

**Tóm lại**
>* State được định nghĩa là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. Trong một React Component, state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại.
>* State - Dữ liệu chỉ nằm trong phạm vi của một component. Nó được sở hữu bởi một components cụ thể mà chỉ là của component đó thôi. Ví dụ, như người yêu bạn chỉ là của bạn vậy =))). Và mỗi khi state thay đổi thì component cũng phải thay đổi theo.
>* Props - Dữ liệu đường truyền từ component cha cho componet con, components con khi nhận được sẽ chỉ được đọc mà không thể thay đổi dữ liệu đó. => giống như việc người con chỉ có thể nhận được ADN từ người cha mà không thể thay đổi nó.
>* Sự khác nhau chính của 2 khái niệm này là component sở hữu dữ liệu. State là chỉ riêng nó có thể sử dụng. Props là dữ liệu mà component con được nhận về từ một component cha.
>* component cha truyền state cho component con thông qua props
>* component cha truyền state cho component cháu thông qua redux

=> redux là gì?
* giống như hình thức lưu chuyển tiền tệ (state).
* có thể từ cha qua mẹ, xuống con hay tới cháu
* tiền tệ ở đây chính là state
* hình thức chuyển tiền từ người này (component này) -> người khác (component khác) thì có thể sự dụng redux

> Redux - 1 thư viện - giúp quản lí state
1. giải quyết vấn đề chia sẻ state
2. lưu dữ liệu vào store: có nhiệm vụ chứa và phân phát dữ liệu
STORE: request -> dispatcher -> action -> reducer: xử lí các hành động được gửi đến <=> state => responsive of request

```jsx
import redux from 'redux';
//Reducer
const counter = (state = 0, action) => {
    //Kiểm tra điều kiện
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
    }
    return state;
};
 
//Đây là store
const store = redux.createStore(counter);
 
//Thực hiện dispath
store.dispath({type : 'INCREMENT'})
```
Ở ví dụ trên khi dispath được thực thi thì lúc này nó sẽ gửi đến cho reducer một action có type là INCREMENT, reducer kiểm tra action và tiến hành tăng giá trị của state và trả về state mới.

#1 Install Redux

npm install redux react-redux --save

#2 

     src/
        const/
            chứa các hằng số cố định của dự án.
        actions/ {
            * chứa các actions dùng để truyền vào hàm dispatch.
            * là một object chứa các hành động mà bạn muốn gửi đến reducers
        }
        reducer/
            chứa các reducers trong redux.

#2.1 Khởi tạo các hằng
    const/
        index.js
```js 
// index.js
export const ADD_NEW_NOTE = "ADD_NEW_NOTE"
```

> Dự án càng lớn thì số hằng khai báo có thể nhiều hơn.

### 2.2: Khởi tạo actions
Khi muốn gửi actions đến reducers 
```js
store.dispatch(actions)
```
```js
// actions/index.js
import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";
export const actAddNote = (content) => {
  return {
    type: ADD_NEW_NOTE,
    content,
  };
};
```
Mỗi action chúng ta cần phải chỉ định thụôc tính type có giá trị duy nhất. Bởi khi action gửi đến reducer nó sẽ dựa vafp thuộc tính action.type để xác định mình nên làm gì với state.


### 2.3 Khởi tạo reducers
Reducers sẽ có nhiệm vụ thay đổi state của ứng dụng dựa trên từng hành động được gửi đế. Trong các dự án lớn chúng ta cần chia ra rất nhiều reducers khác nhau. Ở trong thư mục src/reducers sẽ chỉ khởi tạo 1 reducers có tên noteReducer.

```js
// reducers/noteReducers.js
import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";

const noteReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const generateID = new Date().getTime();
      state = [...state, { id: generateID, content: action.content }];
      return state;
    default:
      return state;
  }
};

export default noteReducers
```

Chúng ta sẽ gộp các reducer lại với nhau bằng hàm combineReducer.

```js
// src/reducers/index.js

import {combineReducers} from 'redux'
import noteReducers from './noteReducer'

//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    note: noteReducers
})
```

<!-- ANCHOR react-router-dom -->
# REACT-ROUTER
* SPA - render các UI thành một trang duy nhất.
* Sử dụng URL để làm điều kiện xem component nào sẽ được render

> React Router là một thư viện cho việc điều hướng URL tiêu chuẩn trong React, Nó cho phép chúng ta có thể đồng bộ UI với URL. Được thiết kế với API đơn giản, từ đó cho phép giải quyết các vấn đề về URL một cách nhanh chóng.

DOC:

#1 npm install react-router-dom

Trước tiên, chúng ta cần phải thiết lập app sử dụng React Router. Mọi thứ sẽ được render cần phải được bọc bên trong BrowserRouter, chúng ta sẽ lựa chọn component App bởi nó chính là component xử lí logic mặc định trong ReactJS. 

```jsx
// index.js
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
```
```jsx
// Ở đây chúng ta import 4 component được xây dựng trong thư mục  src/components
// đó là Home, About, Shop, Error
import React from 'react'
import { Route, Switch } from 'react-router-dom';

​import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop'
import Error from './components/Error'


export defaults function App() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
            </Switch>
        </>
    )
}
```
-> Ở phiên bản react-router-dom ??? 
1. switch được thay thế bằng routes
2. component được thay thế bằng element

```jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom';

​import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop'
import Error from './components/Error'


export defaults function App() {
    return (
        <>
            <Routes>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
            </Routes>
        </>
    )
}
```

> Route có nhiệm vụ render component theo path được chỉ định. Trong trường hợp ở trên Route có path là / có thêm một props nữa là exact bởi hầu hết các path đều thông qua /. Khi một route không có thuộc tính path thì render component khi URL không tồn tại.


Hiểu:
Ví dụ component cha muốn gửi tiền cho component con.

Component con cần yêu cầu số tiền.
// const
```js
    export const RUT_TIEN = "RUT TIEN"
```
// action
```js
    // nhan yeu cau
    import {RUT_TIEN} from ".src/const/index"

    // khoi tao hanh dong/su kien
    export const rutTien = (soTienCanRut) => {
        return {
            type: RUT_TIEN,
            // thuộc tính type chỉ có giá trị duy nhất để khi gửi đến reducer, nó sẽ dựa vào action.type để xác định nên làm gì với state
        }
    }
```
// reducer
```js
//reducers/ruttienReducers.js
// lay yeu cau
import {RUT_TIEN} from '../const/index'
// thuc thi
const ruttienReducers = (state =[], action) => {
    switch(action.type) {
        case RUT_TIEN:
            const generateID = newDate().getTime();
            state = [...state, {id: generateID, sotien: action.soTienCanRut}]
            return state;
        default
            return state;
    }
}

export default ruttienReducers
```
<!-- ! tại sao không lấy từ /action mà lại lấy từ /const -->

Chúng ta sẽ gộp các reducer lại với nhau bằng hàm combineReducer.

```js
// src/reducers/index.js

import {combineReducers} from 'redux'
import ruttienReducers from './ruttienReducers'

//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là ruttienReducers
export default combineReducers({
    ruttien: ruttienReducers
})
```

Component gửi tiền vô ngân hàng (store)
~ ví dụ này chưa đúng lắm

Tích hợp Redux
Sau khi đã tạo ra các thành phần cần thiết trong ứng dụng React chúng ta cần phải tạo Store lưu trữ state. Chúng ta sẽ làm việc với file src/index.js

```js
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


import { Provider } from "react-redux";
import { createStore } from "redux";

//Gọi reducers
import reducers from "./reducers/index";
//Tạo store
const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

Để các component khác có thể lấy dữ liệu chúng ta cần phải bọc các component vào trong Provider.
Lấy và cập nhật giá trị của state từ Store
Sau khi đã hoàn thành xong tất cả các bước cài đặt Redux cho project, chúng ta có thể thực hiên lấy và cập nhật giá trị của state ở store về component. Giả sử ở đây chúng ta muốn tương tác với store ở component App.js sẽ thực hiện như sau:

```js
// src/App.js

//Import kết nối tới react-redux
import { connect } from 'react-redux'
//Import action dùng để dispatch
import {actAddNote} from './actions/index'

function App(props) {
  
  return (
    ...
  );
}

//Gán dispatch thành props
const mapDispatchToProps = (dispatch) =>  {
  return {
    addNote: (content) => {
      dispatch(actAddNote(content))
    }
  }
}

//Gán giá trị của state thành props
const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note
  }
}

//Export component với két nối redux.
export default connect(mapStateToProps, mapDispatchToProps)(App)
```
Để kết nối với redux ở trong component chúng ta cần phải import hàm kết nối. Ở đây có 2 hàm cực kì quan trọng giúp thao tác với state đó là:

mapStateToProps: giúp chuyển state sang thành props sử dụng trong component.
mapDispatchToProps: giúp chuyển dispatch trong redux thành props. Giả sử mình muốn thực hiện dispatch action actAddNote thì mình chỉ cần gọi props.addNote()

https://freetuts.net/tich-hop-redux-vao-reactjs-2636.html


<!-- ----------------------------------------------------------------------- -->
<!--                                  HOOK                                   -->
<!-- ----------------------------------------------------------------------- -->
Chúng ta có thể hiểu React Hooks là một chức năng được xây dựng trong React cho phép chúng ta có thể sử dụng state và life cycle bên trong một functional components. Hooks đem lại một vài lợi ích khi làm việc như :

1. Cải thiện hiệu suất làm việc bằng cách có thể tái sử dụng code.
2. Các thành phần được trình bày khoa học hơn.
3. Sử dụng một cách linh hoạt trong component tree.

<!-- SECTION useState()-->
```js
const [tenSate, hamCapNhatState] = useState(giaTriBanDauCuaState);
```

<!-- SECTION  useEffect() -->
1. function nắm bắt tất cả cacs sự thay đổi của code
2. được khởi chạy khi giá trị của một biến nào đó thay đổi  || component đã được render
3. có thể thay thế hoàn toàn life cycle trong class component

```js
    useEffect(functionDuocKhoiChay, arrayChuaCacGiaTriThayDoi)
```
<!-- SECTION  useContext() -->

<!-- SECTION  useReducer() -->

useContext()
useContext() cho phép nhận về giá trị của context mỗi khi nó thay đổi. Bạn có thể tham khảo bài viết về React Context để hiểu rõ hơn.
```js
 const giaTriCuaContext = useContext(TenContext);
 ```
useReducer()
Hook useReducer được sử dụng để xử lý các state phức tạp và việc chia sẻ state giữa các component. Ở đây chúng ta có cú pháp.
```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
Tất cả các hooks mà được giới thiệu ở trên, sẽ được giới thiệu chi tiết và ví dụ cụ thể ở loạt bài viết tiếp theo.