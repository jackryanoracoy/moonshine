# Front-end Template
  
A Scalable Front End Template.
  
  
## CSS Methodologies  
  
A methodology of writing code that’s scalable and easy to manipulate.  

* style.min.css - compiled/minified version of all the syles.  
* style.css - contains template information and style imports.  
* setting.css - contains custom properties (css variables), font-face, etc.
* base.css - reset and/or normalize styles, box-sizing definition, etc.  
* utitity.css - utilities and helper classes with ability to override anything.  
* layout.css - specific UI layouts.  
* component.css - specific UI components.   
  
### Naming Convention 
    
Create reusable components and code sharing in front-end development
  
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
  
prefix    = (u) utility, (l) layout, (c) component.
classname = preferred class name.
modifier  = preferred modifier name.
viewport  = (sm) small, (md) medium, (lg) large, (xl) extra large.
int       = 0-9.
others    = min, max.  
  
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
  
* screen-reader-text
* row, groupr, clearfix
* u-container
* u-hidden (sm-min, md-min, lg-min, xl-min, sm-max, md-max, lg-max, xl-max)
* u-float-left (sm, md, lg, xl)
* u-float-right (sm, md, lg, xl)
* u-float-none (sm, md, lg, xl)
* u-flex
* u-flex--row-wrap (sm, md, lg, xl)
* u-flex--row-wrap-no (sm, md, lg, xl)
* u-flex--row-wrap-reverse (sm, md, lg, xl)
* u-flex--row-reverse-wrap (sm, md, lg, xl)
* u-flex--row-reverse-wrap-no (sm, md, lg, xl)
* u-flex--row-reverse-wrap-reverse (sm, md, lg, xl)
* u-flex--col-wrap (sm, md, lg, xl)
* u-flex--col-wrap-no (sm, md, lg, xl)
* u-flex--col-wrap-reverse (sm, md, lg, xl)
* u-flex--col-reverse-wrap (sm, md, lg, xl)
* u-flex--col-reverse-wrap-no (sm, md, lg, xl)
* u-flex--col-reverse-wrap-reverse (sm, md, lg, xl)
* u-flex--wrap (sm, md, lg, xl)
* u-flex--wrap-no (sm, md, lg, xl)
* u-flex--wrap-reverse (sm, md, lg, xl)
* u-flex--column (sm, md, lg, xl)
* u-flex--column-reverse (sm, md, lg, xl)
* u-flex--row (sm, md, lg, xl)
* u-flex--row-reverse (sm, md, lg, xl)
* u-flex--justify-start (sm, md, lg, xl)
* u-flex--justify-end (sm, md, lg, xl)
* u-flex--justify-center (sm, md, lg, xl)
* u-flex--justify-spacearound (sm, md, lg, xl)
* u-flex--justify-spacebetween (sm, md, lg, xl)
* u-flex--justify-spaceevenly (sm, md, lg, xl)
* u-flex--align-start (sm, md, lg, xl)
* u-flex--align-end (sm, md, lg, xl)
* u-flex--align-center (sm, md, lg, xl)
* u-flex--align-stretch (sm, md, lg, xl)
* u-flex--align-spacearound (sm, md, lg, xl)
* u-flex--align-spacebetween (sm, md, lg, xl)
* u-flex--align-item-start (sm, md, lg, xl)
* u-flex--align-item-end (sm, md, lg, xl)
* u-flex--align-item-center (sm, md, lg, xl)
* u-flex--align-item-stretch (sm, md, lg, xl)
* u-flex--align-item-baseline (sm, md, lg, xl)
* u-flex__align-self-start (sm, md, lg, xl)
* u-flex__align-self-end (sm, md, lg, xl)
* u-flex__align-self-center (sm, md, lg, xl)
* u-flex__align-self-stretch (sm, md, lg, xl)
* u-flex__align-self-baseline  (sm, md, lg, xl)
* u-flex__content (sm, md, lg, xl)
* u-flex__content-0 (sm, md, lg, xl)
* u-flex__content-1 (sm, md, lg, xl)
* u-flex__content-2 (sm, md, lg, xl)
* u-flex__content-3 (sm, md, lg, xl)
* u-flex__content-4 (sm, md, lg, xl)
* u-flex__content-5 (sm, md, lg, xl)
* u-flex__content-6 (sm, md, lg, xl)
* u-flex__content-7 (sm, md, lg, xl)
* u-flex__content-8 (sm, md, lg, xl)
* u-flex__content-9 (sm, md, lg, xl)
* u-flex__content-10 (sm, md, lg, xl)
* u-flex__content-11 (sm, md, lg, xl)
* u-flex__content-12 (sm, md, lg, xl)
* u-flex__content-grow (sm, md, lg, xl)
* u-flex__content-grow-0 (sm, md, lg, xl)
* u-flex__content-grow-1 (sm, md, lg, xl)
* u-flex__content-grow-2 (sm, md, lg, xl)
* u-flex__content-grow-3 (sm, md, lg, xl)
* u-flex__content-grow-4 (sm, md, lg, xl)
* u-flex__content-grow-5 (sm, md, lg, xl)
* u-flex__content-grow-6 (sm, md, lg, xl)
* u-flex__content-grow-7 (sm, md, lg, xl)
* u-flex__content-grow-8 (sm, md, lg, xl)
* u-flex__content-grow-9 (sm, md, lg, xl)
* u-flex__content-grow-10 (sm, md, lg, xl)
* u-flex__content-grow-11 (sm, md, lg, xl)
* u-flex__content-grow-12 (sm, md, lg, xl)
* u-flex__content-shrink (sm, md, lg, xl)
* u-flex__content-shrink-0 (sm, md, lg, xl)
* u-flex__content-shrink-1 (sm, md, lg, xl)
* u-flex__content-shrink-2 (sm, md, lg, xl)
* u-flex__content-shrink-3 (sm, md, lg, xl)
* u-flex__content-shrink-4 (sm, md, lg, xl)
* u-flex__content-shrink-5 (sm, md, lg, xl)
* u-flex__content-shrink-6 (sm, md, lg, xl)
* u-flex__content-shrink-7 (sm, md, lg, xl)
* u-flex__content-shrink-8 (sm, md, lg, xl)
* u-flex__content-shrink-9 (sm, md, lg, xl)
* u-flex__content-shrink-10 (sm, md, lg, xl)
* u-flex__content-shrink-11 (sm, md, lg, xl)
* u-flex__content-shrink-12 (sm, md, lg, xl)

* u-flex__content-all (sm, md, lg, xl)
* u-flex__content-all-0 (sm, md, lg, xl)
* u-flex__content-all-1 (sm, md, lg, xl)
* u-flex__content-all-2 (sm, md, lg, xl)
* u-flex__content-all-3 (sm, md, lg, xl)
* u-flex__content-all-4 (sm, md, lg, xl)
* u-flex__content-all-5 (sm, md, lg, xl)
* u-flex__content-all-6 (sm, md, lg, xl)
* u-flex__content-all-7 (sm, md, lg, xl)
* u-flex__content-all-8 (sm, md, lg, xl)
* u-flex__content-all-9 (sm, md, lg, xl)
* u-flex__content-all-10 (sm, md, lg, xl)
* u-flex__content-all-11 (sm, md, lg, xl)
* u-flex__content-all-12 (sm, md, lg, xl)
* u-flex__grow (sm, md, lg, xl)
* u-flex__grow-no (sm, md, lg, xl)
* u-flex__shrink (sm, md, lg, xl)
* u-flex__shrink-no (sm, md, lg, xl)
* u-flex__basis-1 (sm, md, lg, xl)
* u-flex__basis-2 (sm, md, lg, xl)
* u-flex__basis-3 (sm, md, lg, xl)
* u-flex__basis-4 (sm, md, lg, xl)
* u-flex__basis-5 (sm, md, lg, xl)
* u-flex__basis-6 (sm, md, lg, xl)
* u-flex__basis-7 (sm, md, lg, xl)
* u-flex__basis-8 (sm, md, lg, xl)
* u-flex__basis-9 (sm, md, lg, xl)
* u-flex__basis-10 (sm, md, lg, xl)
* u-flex__basis-11 (sm, md, lg, xl)
* u-flex__basis-12 (sm, md, lg, xl)
* 
  
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
  
* [EditorConfig](https://editorconfig.org/)  
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
