var str = '{"names":[' + // crate JSON object 
'{"first":"Hakuna","lastN":"Matata" },' + 
'{"first":"Jane","lastN":"Doe" },' + 
'{"first":"Air","last":"Jordan" }]}'; 
obj = JSON.parse(str);   // parse 
document.write(obj.names[1].first); // access


var myObj = { "name":"Jane", "age":18, "city":"Chicago" };  // create object
var myJSON = JSON.stringify(myObj);                         // stringify
window.location = "demo.php?x=" + myJSON;        