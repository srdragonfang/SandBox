var object = {name: 'javascript',price: 1000,image: 'img-address',};

var {name, ...newObject} = object
console.log(object) 
console.log(newObject) 
// output: newObject = object - name
