# Moonshine
  
Scalable and Maintainable Architecture.
  
  
## Getting Started  

This is a soft launch of Moonshine, Documentation are not ready yet. Sorry for the inconvenience...

### Content  
  
Discover what’s included in the package. Once downloaded, unzip the compressed folder and you’ll see something similar to this:  
  
```
moonshine/
├── addon/
│   └── fontawesome/
├── assets/
│   ├── app-icon/
│   ├── fonts/
│   └── image/
├── scripts/
│   ├── jquery-3.4.1.min.js
│   ├── modernizr-3.7.1.min.js
│   ├── object-fit.min.js
│   ├── scripts.js
│   └── script.min.js
├── styles/
│   ├── base.css
│   ├── component.css
│   ├── layout.css
│   ├── setting.map
│   ├── style.css
│   └── style.min.css
├── 404.html
├── boilerplate.html
├── browserconfig.xml
├── index.html
├── manifrest.json
├── robots.txt
└── service-worker.js
```
  
### Accessibility  
  
Content which should be visually hidden,
but remain accessible to assistive technologies such as screen readers, can be styled using the .sr-only class.
This will ensure that the control becomes visible once focused (for sighted keyboard users).  
  
```
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
```
  
For visually hidden interactive controls, such as traditional “skip” links, .sr-only can be combined with the .sr-only--focusable class. This will ensure that the control becomes visible once focused (for sighted keyboard users).  
  
```
<a class="sr-only sr-only--focusable" href="#site-content">Skip to main content</a>
```
  
Note: To extend template's accessibility please see [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/), [WCAG 2.0](https://www.w3.org/TR/WCAG20/) and similar accessibility standards and requirements.  
  
## CSS Methodologies  
  
Organize project files that can better deal with CSS specifics like global namespace, cascade and selectors specificity.  
Shares the same methodology of some popular methodologies like ITCSS, BEM, SMACSS and OOCSS.  
This approach is to ensure everyone who participates in the development of a website works with a single codebase and speaks the same language.  
  
### Separated CSS codebase  
  
Separate CSS codebase to several sections, similar below:  
  
setting.css - contains custom properties (css variables), font-face, etc.  
base.css - reset and/or normalize styles, box-sizing definition, etc.  
utitity.css - utilities and helper classes with ability to override anything.  
layout.css - specific UI layouts.  
component.css - specific UI components.  
  
```
moonshine/
└── styles/
    ├── base.css
    ├── component.css
    ├── layout.css
    ├── setting.map
    ├── style.css
    └── style.min.css
```  
  
### Naming Convention 
  
Highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.  
  
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
.prefix-classname--modifier-int {...}
.prefix-classname--modifier-viewport {...}
.prefix-classname--modifier-viewport-int {...}
.prefix-classname__child {...}
.prefix-classname__child-int {...}
.prefix-classname__child-viewport {...}
.prefix-classname__child-viewport-int {...}
```  
  
Samples:  
  
```
.l-flex {...}
.l-flex--wrp-no {...}
.l-flex--wrp-no-md {...}
.l-flex__content {...}
.l-flex__content-12 {...}
.l-flex__content-md {...}
.l-flex__content-md-12 {...}
.u-gutter-top-10 {...}
.u-gutter-top-sm-20 {...}
.u-gutter-top-md-50 {...} 
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
* u-width-xxx = sets width.
* u-height-xxx = sets height.
* u-cluster-gap-xxx = sets cluster gap.
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
* u-tab-link = tab content view.  
* u-image-xxx = syle for images.  
  
Samples:  
  
```
<div class="u-container">
  <div class="u-flex">
    <div class="u-flex__content-12 u-flex__content-md-6">...</div>
    <div class="u-flex__content-12 u-flex__content-md-6">...</div>
  </div>
</div>
```
  
Note: You can check the [utility.css](styles/utility.css) for more details.  
  
  
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
