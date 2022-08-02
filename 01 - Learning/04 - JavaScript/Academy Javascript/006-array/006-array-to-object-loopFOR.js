const arrName = ['sam', 'lucy', 'emie'];
const object = {}
// const object = {...arrName};

for(let i = 0; i< arrName.length; i++){
  object[i] = arrName[i]
}

console.log(object)
