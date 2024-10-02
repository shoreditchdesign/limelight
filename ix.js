//Swiper Carousel
  var mySwiper = new Swiper('#quote-swiper', {
    slidesPerView: 'auto', // Automatically adjust slides based on their width
    spaceBetween: 16, // Space between slides
    grabCursor: true,
    allowTouchMove: true,
    //loop: true,
    scrollbar: {
      el: '#quote-scrollbar', // Element for the scrollbar
      draggable: true, // Makes the scrollbar draggable
    },
    pagination: {
      el: '#quote-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#quote-next',
      prevEl: '#quote-prev',
    },
    breakpoints: {
      0: { /* when window >= 0px - mobile */
        spaceBetween: 16, // Adjust the space between slides for smaller screens
      },
      767: { /* when window >= 767px - tablet */
        spaceBetween: 16, // You can set a different spacing here as needed
      },
      992: { /* when window >= 992px - desktop */
        spaceBetween: 8, // Less space between slides for larger screens
      }
    },
  });

  /* Deprecated
// Horizontal Scroll
var container = $('#carousel-wrapper');
var boxes = $('#carousel-track');

gsap.to(boxes, {
x: function(){  
return -(container[0].scrollWidth - document.documentElement.clientWidth) + "px";
},
ease: "none",
scrollTrigger: {
trigger: container,
start: "center center",
end: function(){  
return "+=" + container[0].scrollWidth * 0.5;
},
scrub: true,
pin: 'body',
//anticipatePin: 1
}

});
ScrollTrigger.refresh();

//Countup

$(".counterup").each(function (index) {
// assign ID
let thisId = "countup" + index;
$(this).attr("id", thisId);
// create variables
let startNumber = +$(this).text();
let endNumber = +$(this).attr("final-number");
let decimals = 0;
let duration = $(this).attr("count-duration");
// animate number
let myCounter = new CountUp(thisId, startNumber, endNumber, decimals, duration);

// Scroll into view trigger
ScrollTrigger.create({
trigger: $(this),
start: "top 80%",
end: "bottom top",
onEnter: () => {
myCounter.start();
}
});
});

*/