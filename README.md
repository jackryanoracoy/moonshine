# Front-end Template
  
A Scalable Front End Template.
  
  
## CSS Methodologies  
  
A methodology of writing code that’s scalable and easy to manipulate.  

* style.min.css = compiled/minified version of all the syles.  
* style.css = contains template information and style imports.  
* setting.css = contains custom properties (css variables), font-face, etc.
* base.css = reset and/or normalize styles, box-sizing definition, etc.  
* utitity.css = utilities and helper classes with ability to override anything.  
* layout.css = specific UI layouts.  
* component.css = specific UI components.   
  
### Naming Convention 
    
Create reusable components and code sharing in front-end development  
  
prefix    = (u) utility, (l) layout, (c) component.  
classname = preferred class name.  
modifier  = preferred modifier name.  
viewport  = (sm) small, (md) medium, (lg) large, (xl) extra large.  
int       = 0-9.  
others    = min, max.  
  
```
.prefix-classname {...}  
.prefix-classname-int {...}  
.prefix-classname-viewport {...}  
.prefix-classname-viewport-int {...}
.prefix-classname--modifier {...}  
.prefix-classname__child {...}  
.prefix-classname__child--modifier {...}  
.prefix-classname__child--viewport {...}    
.prefix-classname__child--viewport-int {...}
```  
  
Samples:  
  
```
.u-flex {...}  
.u-flex--wrap-no {...}  
.u-flex--wrap-no-sm {...}  
.u-flex__shrink-no {...}  
.u-column-sm-12 {...}  
.u-column-md-12 {...}  
.u-column-lg-12 {...}  
.u-column-xl-12 {...}
```
  
### CSS Variables  
  
CSS variables offer similar flexibility to Sass’s variables, but without the need for compilation before being served to the browser.  

```
var(custom-name, value)
```

Samples:  
  
```
u-red {  
  var(--red-500, red)
}  

u-font-size {  
  var(--normal-size, 1.5rem)  
}

@media (min-width(var(--breakpoint-sm))) {  
  u-font-size-sm {  
    var(--normal-size, 1.5rem)  
  }
}
```  
  
### CSS Utilities  
  
* screen-reader-text = for screen readers.  
* row, groupr, clearfix = fix float overflow.  
* u-container = element container.  
* u-hidden = hides element.  
* u-float-xxx = floats element.  
* u-flex = a flexbox.  
* u-grid = a grid (experemental).  
* u-column-xxx = sets column width.
* u-gutter-xxx = adds margin.    
* u-gap-xxx = adds padding.  
* u-text-xxx = style for typoghrapy.  
* u-font-xxx = style for typoghrapy.  
* u-line-height-xxx = style that controls line-height.  
* u-white-space-xxx = style that controls white space.
* u-object-fit = makes images fit.  
* u-list = style for list items.
* u-color-xxx = adds font color.
* u-background-xxx = adds background style.  
* u-parallax = adds parallax effect on image.
* u-image-xxx = syle for images.  
  
* You can check the [utility.css](styles/utility.css) for more details.
  
Samples:  
  
```
<div class="u-container">
  <div class="u-flex">
    <div class="u-flex__content-12 u-flex__content-md-6">...</div>
    <div class="u-flex__content-12 u-flex__content-md-6">...</div>
  </div>
</div>
```
  
  
## Includes  
  
Some great works that are included in this template.  
   
* [Normalize](https://necolas.github.io/normalize.css/)  
* [jQuery](https://jquery.com/)  
* [Modernizr](https://modernizr.com/)  
* [ObjectFit](https://github.com/fregante/object-fit-images/)  
* [FontAwesome](https://fontawesome.com/)  
    
  
## Author  
  
Jack Ryan Oracoy  
https://jackryanoracoy.github.io  
jackryanoracoy@gmail.com  
  
[Github](https://github.com/jackryanoracoy), 
[Facebook](https://facebook.com/JackRyanOracoy), 
[Twitter](https://twitter.com/JackRyanOracoy), 
[Behance](https://www.behance.net/jackryanor7dac), 
[LinkedIn](https://www.linkedin.com/in/jackryanoracoy)  
  
  
## License  
  
This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.  
