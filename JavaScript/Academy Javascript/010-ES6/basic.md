## Gán giá trị mặc định bằng toán tử ||
Hiện nay trong ES6 có tính năng gán giá trị mặc định. Để sử dụng tính năng này ở các Browsers cũ hơn bạn có thể sử dụng toán tử  ||  bằng cách dùng giá trị mặc định như là tham số thứ 2. Nếu tham số đầu trả về  false  thì tham số thứ hai sẽ được dùng làm giá trị mặc định.

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