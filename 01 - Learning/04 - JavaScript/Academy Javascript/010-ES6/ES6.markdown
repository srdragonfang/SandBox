# 0. INFORMATION


# ANCHOR LET, CONST VS VAR
## ES5 var
Khi nhắc đến khai báo biến thì phải nhắc đến scope
Scope là phạm vi mà biến đó được truy xuất và sử dụng. var // global scope

```js
var firstName = 'Sokunmaru' // global scope
function getName() {
    var lastName = 'Nguyen'
    return firstName + ' ' + lastName
}

console.log(getName()) 
```
Khi khai báo biến trong function thì biến chỉ có phạm vị trong function.
## ES6 let const
Block scope { chỉ có thể truy xuất và sử dụng trong }
let:  có thể thay đổi giá trị.
const: hằng = không thể thay đổi giá trị.

# ANCHOR Templete Literal
```js 
// ES5
var firstName = 'John';
var greating = 'I am' + firstName + '\n'
// ES6
```
# ANCHOR ENHANCED OBJECT PROPERTY


# 1. VALUE DEFAULT
Gán giá trị mặc định bằng toán tử ||
Hiện nay trong ES6 có tính năng gán giá trị mặc định. 
Để sử dụng tính năng này ở các Browsers cũ hơn bạn có thể sử dụng toán tử  ||  bằng cách dùng giá trị mặc định như là tham số thứ 2. Nếu tham số đầu trả về  false  thì tham số thứ hai sẽ được dùng làm giá trị mặc định.
```js
    function User(name, age) {  
    this.name = name || "Pham Van A";
    this.age = age || 27;
    }
    var user1 = new User();  
    console.log(user1.name); // Pham Van A
    console.log(user1.age); // 27
    var user2 = new User("Le Thi C", 20);  
    console.log(user2.name); // Le Thi C 
    console.log(user2.age); // 20
```

# 1. ARROW FUNCTION


# 2. DESTRUCTURING

# EXTENED PARAMETER HANDLING
## DEFAULT PARAMETER
## REST PARAMETER
## 3. SPEAD OPERATOR


## SPEAD OPERATO VS REST PARAMETERS


# 4. JS MODULE 