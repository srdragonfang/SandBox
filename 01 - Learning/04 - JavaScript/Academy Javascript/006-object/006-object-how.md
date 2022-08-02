// ANCHOR  [copy object]
    // #1 Object.assign [shallow copy]
    const newObj = Object.assign({}, objRoot);
    // #2 Spread Operator Es6 - copy object javascript spread = {…obj1} [shallow copy]
    const newObj1 = { ...objRoot };
    // #3 Object.assign [deep copying]
    const newObj2 = JSON.parse(JSON.stringify(objRoot));
    // ANCHOR  [object constructor]
    // NOTE Object.constructor() === Object -> true

ANCHOR * [Cách tạo một object]
    - Object Literals - được biểu diễn bởi dấu phẩn ngăn cách giữa các cặp name-value
        - Javascript object literals là một singleton, và chúng giúp bạn tạo object một cách thuận tiện và linh hoạt.
        - Chúng giúp bạn khỏi bị thừa code.
        - Ví dụ, bạn có thể đưa một object literals vào bất cứ đâu trong workspace của bạn mà trước đó không cần thiết lập gì cả, vậy mà nó vẫn chạy tốt và hiệu quả!
        - Mặc dù object literals quan trọng, nhưng nó lại không hề hỗ trợ thực thể hóa (instantiation) hay kế thừa (inheritance)
    - Object constructor function
        - ***Constructor function*** là  một trong số những cách thông dụng nhất để tạo một Javascript object phụ thuộc vào việc kế thừa prototype nhằm giúp các chức năng trở nên hữu dụng.
        - Mấu chốt của những function dạng này là chúng có thể được thực thể hóa (instantiation) và được kế thừa (inherited).
    - Prototyping inheritance
    
    
// xóa một key ra khỏi object
const obj1 = {
	name: "sokunm",
	title: "late"
}
// xóa name khỏi obj1
var {name, ...newObje} = obj1

// copy 2 object
const obj1 = {}
const obj2 = {}
var obj3 = {...obj1, ...obj2}