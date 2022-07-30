# Color Functions
Scss provides some function that can be used to manipulate colors. Some of them include:

## mix($colorX, $colorY, weight)
This function is used to mix two color together. First argument is the first color, second is the second color and the third argument is the percentage of first color you want to mix.
```scss
.h1 {
    color: mix(blue, grey, 30%) /*results 30% blue and 70% grey*/
}
```
## lighten($color, $amount)

This function is used to return a lighter color. The first argument is the color and the second is the percentage of how much you want to lighten it.
```scss
.h1 {
    color: lighten(#ff0000, 30 ) /*results #ff9999 */
}
```


## darken($color, $amount)

Takes similar arguments as lighten function but this returns a darker color specified.
darken(#ff0000, 30 ) /*results #660000*/
```scss
.h1 {
    color: darken(#ff0000, 30 ) /*results #660000*/
}
```

## opacify($color, $amount)
This function returns a color with the opacity increase. The first argument is the color and the second is value between 0 and 1.
```scss
.h1 {
    color: opacify($color, $amount)
}
```
<!-- ! cần phải test thử -->

## transparentize($color, $amount)
This function makes a color more transparent, it takes similar arguments to opacify. It returns a color with the opacity reduced. You can say it is the opposite of opacify.
```scss
.h1 {
    color: transparentize($color, $amount)
}
These are just some of the color functions available in Scss, you can check the docs for more.