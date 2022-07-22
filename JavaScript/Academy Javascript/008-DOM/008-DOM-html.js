// ANCHOR ## DOM Element x Collections

// ANCHOR ### DOM > Selector

nameDOM = document.querySelector('#name'); 

nameDOM = document.querySelector('.nameParent #name-chirld'); 

nameDOM = document.querySelector('.nameParent #name-chirld:first-child');  // → name-chirld [0]

nameDOM = document.querySelector('.nameParent #name-chirld:nth-child(2)');  // → name-chirld [2]

nameDOM = document.querySelector('html.nameParent #name-chirld'); 

// ANCHOR ### DOM NodeList

nameDOM = document.querySelectorAll('#name'); 

// ANCHOR ### DOM > Element

- document.getElementById()
    
    document.getElementById("div").style.pointerEvents = "none"; // → none-click
    

document.getElementsByTagName('p')[0]

document.getElementsByClassName('class-name')[0]

// ANCHOR ### DOM > HTMLCollection

// ANCHOR ### DOM // → CHECK

```jsx
const x = document.getElementById("rose");
console.log({ element: x });

const y = document.querySelector('.box');
console.log([y]) -> kiem tra thuoc tinh cua y
```

// ANCHOR ### DOM > a - khi có attribute name

// document.anchors // → HTMLCollection

// ANCHOR ## DOM HTML

// ANCHOR ### Changing HTML Content

document.getElementById(id).innerHTML= new HTML

// https://dblog24h.com/javascript/khac-biet-giua-innerhtml-innertext-textcontent-trong-javascript-25/](https://dblog24h.com/javascript/khac-biet-giua-innerhtml-innertext-textcontent-trong-javascript-25/)

// ANCHOR ### Changing the Value of an Attribute

document.getElementById(id).attribute = new value

document.getElementById("myImage").src = "landscape.jpg";

// ANCHOR ### Dynamic HTML content

document.getElementById("demo").innerHTML = "Date : " + Date();

document.write()

// InnerHTML sẽ in ra nội dung text và những thẻ trong div này luôn. 
// Còn textContent sẽ in ra nội dung text và nội dung các thẻ bên trong div này luôn. 
// Còn innerText sẽ in ra nội dung text, không in ra nội dung của thẻ ẩn( do thẻ span có display: none, cái này dùng để ẩn thẻ span này).