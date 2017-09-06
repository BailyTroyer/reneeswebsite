window.alert(5 + 6);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
function Breads() {
  document.getElementById('mega-title').innerHTML = "Breads.";
}
function Cookies() {
  document.getElementById('mega-title').innerHTML = "Cookies.";
}
function Desserts() {
  document.getElementById('mega-title').innerHTML = "Desserts.";
}

for (i=0; i<10; i++) {
  console.log(i);
  $('.nav-container').addClass('menu-nav');
}
$('.nav-container').addClass('menu-nav'); 
