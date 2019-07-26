// IE support for "main"
document.createElement('main');

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target:"_blank", rel:"noreferrer noopener" });

// Object-Fit
$(function () { objectFitImages() });

// Immersive
$(document).ready(function($) {
  var lastScroll = 0;
    $(window).scroll(function(){
    setTimeout(function() {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $(".l-site-header").removeClass("show");
      }
      else if (scroll < lastScroll - 10) {
        $(".l-site-header").addClass("show");
      }
      if (scroll >= 100) {
        $(".l-site-header").addClass("active");
      } 
      else {
        $(".l-site-header").removeClass("active");
      }
      lastScroll = scroll;
    }, 120);
  });
});

//Remove class "show" (Time interval)
// $(document).ready(function($) {
//   var $removeShow = $(".l-site-header");
//   setInterval(function() {
//     $removeShow.removeClass("show");
//   }, 5000);
// });

// Toggle class on click
$(document).ready(function($) {
  $('.c-site-menu').click(function() {
    $('.c-site-menu').stop().toggleClass('active');
    $('.l-site-header').stop().toggleClass('menu-opened');
    $('.l-site-header__navigation').stop().toggleClass('show');
  });
});

// Smooth scroll
$(document).ready(function($) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate( {
        scrollTop: target.offset().top
      }, 200);
    }
  });
});

// Detect if user is using TAB to navigate
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('tab-used');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
