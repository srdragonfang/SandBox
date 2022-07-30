We can use for loops in our css thanks again to Scss. This can be really useful in creating utility class. You can create classes for your color, font-size , margin , padding and a lot of other properties.

Below are some examples of loops I used to create utility classes in my projects
```scss
/* Generate utility classes for font-size */

@for $x from 1 through 70 {
  .font-size-#{$x} {
    font-size: 0px + $x;
  }
}
```

So I can easily have a class of font-size-20 if I need that on an element.
```scss
/* Generate utility classes for margin */

@for $i from 0 through 500 {
  .m#{$i} {
    margin: 0px + $i;
  }
  .mt#{$i} {
    margin-top: 0px + $i;
  }
  .mb#{$i} {
    margin-bottom: 0px + $i;
  }
  .ml#{$i} {
    margin-left: 0px + $i;
  }
  .mr#{$i} {
    margin-right: 0px + $i;
  }
}
```


If you have used loops to create utility classes in your projects please share in the comments so others can adopt them. Loops are like my favorite scss feature