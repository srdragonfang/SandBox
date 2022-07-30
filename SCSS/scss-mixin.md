// SCSS

//create mixin
@mixin red-color{
    color: grey;
  }
  
  .header{
    @include red-color;  /* add mixin */
  }
  
  .sub-header{
    @include red-color;
    font-size: 40px;
  }
  
  // SCSS

@mixin fontSize ($params: 10px){
    font-size: $params;
  }
  
  .header{
    @include fontSize(20px);
  }
  
  .sub-header{
    @include fontSize(20px);
  }
  
  
  // Compiled CSS
  .header {
    font-size: 20px;
  }
  
  .sub-header {
    font-size: 20px;
  }
  