Another awesome feature of scss is the ability to use If/else statements in css. I have not really used this feature in any of my projects but I think they are awesome.
```scss
$bg: pink;
$bg-mobile: red;

p {
  @if $bg == pink {
    color: blue;
  } @else if $bg-mobile == red {
    color: green;
  } @else {
    color: grey;
  }
}
```
This is just a simple use case for if else statements, if you have used it in a project please share a code snippet in the comment.

Scss has a lot more features than what is covered in this article but these are the commonly used ones. You can check out their docs