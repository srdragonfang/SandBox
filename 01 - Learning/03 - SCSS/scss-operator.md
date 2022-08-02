// Scss offers you different kind of operators that you can use in your CSS. Arithmetic operators like :

// Addition(+)
// Subtraction(-)
// Division(/)
// Multiplication(*) e.t.c

// SCSS
@mixin top-margin ($margin){
  margin-top: 30px + $margin;
}

.container{
  width: 800px - 80px;
  @include top-margin(10px);
}

//Compiled CSS

.container {
  width: 720px;
  margin-top: 40px;
}



// Note that arithmetic operators only work when both values use the same unit i.e rem, em, px

// They also support comparison operators like ==, !=, <, >, >=, <= and logical operators and, or, not.

// You can check out this article for more on Operators

