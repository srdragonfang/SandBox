# I. HTML

# II. CSS
## CSS Rules

    1 - Responsive Web Design: High The website is using responsive web design.

    2 - CSS Print: Medium A print stylesheet is provided and is correct on each page.

    3- Preprocessors: Low Your project is using a CSS preprocessor (e.g Sass, Less, Stylus).

    4 - Unique ID: High If IDs are used, they are unique to a page.

    5 - Reset CSS: High A CSS reset (reset, normalize or reboot) is used and up to date. (If you are using a CSS Framework like Bootstrap or Foundation, a Normalize is already included into it.)

    6 - JS prefix
    JS prefix: Low All classes (or id- used in JavaScript files) begin with js- and are not styled into the CSS files.
```html
<div id="js-slider" class="my-slider">
<!-- Or -->
<div id="id-used-by-cms" class="js-slider my-slider">
```
    7 - embedded or inline CSS: 
    High Avoid at all cost embedding CSS in `<style>` tags or using inline CSS: only use for valid reasons (e.g. background-image for slider, critical CSS).

## CSS Tool
1 - [Autoprefixer](https://autoprefixer.github.io/)
Vendor prefixes: CSS vendor prefixes are used and are generated accordingly with your browser support compatibility.
## SCSS

# III. JAVASCRIPT

# Final

## [Frontend-Checklist](https://github.com/thedaviddias/Front-End-Checklist)

### CSS
