// IE support for "main"
document.createElement('main');

// Object-Fit
$(function () { objectFitImages() });

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target:"_blank", rel:"noreferrer noopener" });

// Immersive
$(document).ready(function($) {
  var lastScroll = 0;
    $(window).scroll(function(){
    setTimeout(function() {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $(".l-site-header").removeClass("l-site-heade--show");
      } else if (scroll < lastScroll - 10) {
        $(".l-site-header").addClass("l-site-heade--show");
      }

      if (scroll >= 100) {
        $(".l-site-header").addClass("l-site-heade--active");
      } else {
        $(".l-site-header").removeClass("l-site-heade--active");
      } lastScroll = scroll;
    }, 120);
  });
});

// Toggle class on click
$(document).ready(function($) {
  $('.c-site-menu').click(function() {
    $('.c-site-menu').stop().toggleClass('active');
    $('.l-site-header').stop().toggleClass('menu-opened');
    $('.l-site-header__navigation').stop().toggleClass('show');
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
