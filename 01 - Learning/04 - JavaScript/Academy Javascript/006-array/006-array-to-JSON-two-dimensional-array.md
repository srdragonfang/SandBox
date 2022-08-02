Để convert mảng hai chiều thành một Array object thi chúng ta có thể làm theo ví dụ sau: Giả sử có một array như sau:


```js
var arr = [
    ["Status", "Name", "Marks", "Position"], 
    ["active", "Akash", 10.0, "Web Developer"],
    ["active", "Vikash", 10.0, "Front-end-dev"],
    ["deactive", "Manish", 10.0, "designer"],
    ["active", "Kapil", 10.0, "JavaScript developer"],
    ["active", "Manoj", 10.0, "Angular developer"],
];


//javascript create JSON object from two dimensional Array
function arrayToJSONObject (arr){
    //header
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
    for (var i=0; i < data.length; i++) {
            var d = data[i],
                    o = {};
            for (var j=0; j < l; j++)
                    o[cols[j]] = d[j];
            formatted.push(o);
    }
    return formatted;
}

// Output:

[{
  Marks: 10,
  Name: "Akash",
  Position: "Web Developer",
  Status: "active"
}, {
  Marks: 10,
  Name: "Vikash",
  Position: "Front-end-dev",
  Status: "active"
}, {
  Marks: 10,
  Name: "Manish",
  Position: "designer",
  Status: "deactive"
}, {
  Marks: 10,
  Name: "Kapil",
  Position: "JavaScript developer",
  Status: "active"
}, {
  Marks: 10,
  Name: "Manoj",
  Position: "Angular developer",
  Status: "active"
}]
```