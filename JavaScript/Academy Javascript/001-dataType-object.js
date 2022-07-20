var person1 = new Object(); 
person.name = "Anonystick"; 
person.age = 38;

var person2 = {}; //cũng tương đương new Object()
person2.name = "Anonystick"; 
perso2.age = 38;

var person3 = {
    name: "Anonystick.com",
    age: 38,
    action: function(){
            console.log(this.name);
    }            
}