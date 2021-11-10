function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener('animationend', function () {
    d.parentElement.removeChild(d);
  }.bind(this));
}
document.addEventListener('click', clickEffect);



$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('.navbar'),
      $panel = $('.section');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
      
    }
  });    
  
}).scroll();


// OWl Carousel
$(document).ready(function() {
  $('.slider-hero').owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    dotsData: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
        margin: 0
      }
    }
  })
})

// OWl Carousel
$(document).ready(function() {
  $('.slider-page-gallery').owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    dotsData: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
        margin: 0
      }
    }
  })
})


// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 1000,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 2000,
//     easing: "easeOutExpo",
//     delay: 6000
//   });


//   AOS.init();


// Press and Hold Event

$(document).ready(function() {
  
  var i = 0, timeOut = 0;
  
  $('.owl-item').on('mousedown touchstart', function(e) {
  
    $('.slider-title h1').addClass('clickHold');

    $('.slider-overlay').addClass('slider-overlay-clicked');


    timeOut = setInterval(function(){
      console.log(i++);
    }, 100);

  }).bind('mouseup mouseleave touchend', function() {
    $('.slider-title h1').removeClass('clickHold');
    $('.slider-overlay').removeClass('slider-overlay-clicked');

    clearInterval(timeOut);
  });
  
});

