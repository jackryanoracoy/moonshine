# Front-end Template
  
A Progressive Web App (PWA) Template.
  
  
## Getting Started  
  
Naming Convention:  

prefix = "u" for utility, "l" for layout, "c" for component.
classname = preferred class name.  
modifier = preferred modifier name.
viewport = "sm" for small viewport, "md" for medium viewport, "lg" for large viewport, "xl" for extra large viewport.  
int = 0-9.  
others = min, max.
  
```
.prefix-classname {...}  
.prefix-classname-int {...}  
.prefix-classname-viewport {...}  
.prefix-classname-viewport-int {...}
.prefix-classname--modifier {...}  
.prefix-classname__child {...}  
.prefix-classname__child--modifier {...}  
.prefix-classname__child--modifier-viewport {...}    
.prefix-classname__child--modifier-viewport-int {...}    
```
  
Naming Convention Examples:  
  
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
  
  
CSS Variables:  
  
Offer similar flexibility to Sass’s variables, but without the need for compilation before being served to the browser.  

```
.prefix-classname { var(--varname, fallback) }  
```

CSS Variables Examples:  
  
```
color { var(--red-500, red) }  
font-size { var(--normal-size, 1.5rem) }
@media (min-width(var(--breakpoint-sm))) {...}
```
  
  
## Styles  

* style.min.css - compiled/minified version of all the syles.  
* style.css - contains template information and style imports.  
* setting.css - contains custom properties (css variables), font-face, etc.
* base.css - reset and/or normalize styles, box-sizing definition, etc.  
* utitity.css - utilities and helper classes with ability to override anything.  
* layout.css - specific UI layouts.  
* component.css - specific UI components.   
  
### Setting  

* Custom Properties (CSS Variables)  
* Font-face
  
### Base (no-prefix)  
  
* Reset  
* HTML  
* Outline  
* Body  
* Links  
* Typography  
* Normalize  
* Browser Upgrade  
  
### Utility (u-)  
  
* Screen-reader-text  
* Clearfix, Group, Row  
* Hidden  
* Container  
* Float    
* Flex  
* Grid  
* Column  
* Column Gap  
* Gutter  
* Gap  
* Typoghrapy  
* Object-fit  
* Color  
* Background  
  
### Layout (l-)  
  
* Section  
* Article  
* Site-header  
* Site-main  
* Site-footer  
* Site-atf  
* Site-headline  
* Site-content  
  
### Component (c-)  
  
* Site-menu  
* Site-nav  
* Site-title  
* Button  
* Card  
* Heading  
* and more...  
  
  
## Note
  
You can use the compiled/minified style (style.min.css) for better performance, update the file if necessary.  

This template uses EditorConfig that helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. [Read more...](https://editorconfig.org/)
  
You can remove unnecessary files that won't be needed in the project.  
e.g. markups, styles, scripts, fonts, service worker (if project wont be over HTTPS), etc.  
  
  
## Author  
  
Jack Ryan Oracoy  
https://jackryanoracoy.github.io  
jackryanoracoy@gmail.com  
  
[Github @jackryanoracoy](https://github.com/jackryanoracoy)  
[Facebook @JackRyanOracoy](https://facebook.com/JackRyanOracoy)  
[Twitter @JackRyanOracoy](https://twitter.com/JackRyanOracoy)  
[Behance @jackryanor7dacy](https://www.behance.net/jackryanor7dac)  
[LinkedIn @jackryanoracoy](https://www.linkedin.com/in/jackryanoracoy)  
  
  
## License  

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.  
