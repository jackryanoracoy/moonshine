# Moonshine
  
Moonshine (Front-end Web Development Template) - A Scalable and Maintainable Architecture.  
  
  
## Getting Started  

Get started with Moonshine, a scalable and maintainable architecture for building responsive, mobile-first web apps or sites.  
Moonshine helps you build not only fast but scalable and maintainable web apps or sites. With Moonshine you have a package that is built with the combined knowledge and effort of some great developers, from their methodology, codes, packages, etc...  
  
Ready to kick-start your project using Moonshine? Download Moonshine package or check Moonshine releases.  
Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Or you can use our boilerplate.html included in the package.  
  
### Content  
  
Discover what’s included in the package. Once downloaded, unzip the compressed folder and you’ll see something similar to this:  
  
```
moonshine/
├── addon/
│   └── fontawesome/
├── assets/
│   ├── app-icon/
│   ├── fonts/
│   └── images/
├── scripts/
│   ├── jquery-3.4.1.min.js
│   ├── modernizr-3.7.1.min.js
│   ├── object-fit.min.js
│   └── script.js
├── styles/
│   ├── base.css
│   ├── component.css
│   ├── layout.css
│   ├── setting.css
│   └── style.css
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .htaccess
├── 404.html
├── boilerplate.html
├── browserconfig.xml
├── index.html
├── manifrest.json
├── robots.txt
└── service-worker.js
```
  
### Theming  
  
Customize Moonshine with CSS variables for global style preferences for easy theming and component changes.  
Here are the CSS variables we include (note that the :root is required). Located at setting.css file.  
  
```
:root {

  /* Color */
  --primary: #263238;
  --secondary: #37474F;
  --success: #4CAF50;
  --warning: #FF5722;
  --danger: #F44336;
  --info: #2196F3;
  --light: #FAFAFA;
  --dark: #212121;

  --red: #F44336;
  --pink: #E91E63;
  --purple: #9C27B0;
  --deep-purple: #673AB7;
  --indigo: #3F51B5;
  --blue: #2196F3;
  --light-blue: #03A9F4;
  --cyan: #00BCD4;
  --teal: #009688;
  --green: #4CAF50;
  --light-green: #8BC34A;
  --lime: #CDDC39;
  --yellow: #FFEB3B;
  --amber: #FFC107;
  --orange: #FF9800;
  --deep-orange: #FF5722;
  --brown: #795548;
  --blue-grey: #607D8B;

  --grey-50: #FAFAFA;
  --grey-100: #F5F5F5;
  --grey-200: #EEEEEE;
  --grey-300: #E0E0E0;
  --grey-400: #BDBDBD;
  --grey-500: #9E9E9E;
  --grey-600: #757575;
  --grey-700: #616161;
  --grey-800: #424242;
  --grey-900: #212121;

  /* Transition */
  --transition: all 300ms ease-in-out 120ms;

  /* font-family */
  /* --font-family-noto-sans: "Noto Sans", sans-serif; */  
  /* --font-family-noto-sans-jp: "Noto Sans", sans-serif; */  
  --font-family-open-sans-condensed: "Open Sans Condensed", sans-serif;  
  --font-family-open-sans: "Open Sans", sans-serif;  
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;  

}
```
  
### Breakpoints  
  
Moonshine use a handful of media queries to create sensible breakpoints for layouts and interfaces. 
These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.  
  
```
// Small devices (576px and up)
@media (min-width: 576px) {...}

// Medium devices (768px and up)
@media (min-width: 768px) {...}

// Large devices (992px and up)
@media (min-width: 992px) {...}

// Extra large devices (1200px and up)
@media (min-width: 1200px) {...}
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
    └── style.css
```  
  
### Naming Convention 
  
Highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.  
  
prefix - (u) utility, (l) layout, (c) component, and (js) javascript related classes.  
classname - preferred class/object name.  
modifier - preferred modifier name.  
viewport - (sm) small, (md) medium, (lg) large, (xl) extra large.  
int - integer (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).  
others - min, max, auto.  
  
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
.u-mar-top-10 {...}
.u-mar-top-sm-20 {...}
.u-mar-top-md-50 {...} 
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
