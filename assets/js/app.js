$('#slideshow').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<img src="assets/img/prev-btn.svg" id="prev" alt="previous button">',
  nextArrow: '<img src="assets/img/next-btn.svg" id="next" alt="next button">',
  responsive: [
  {
    breakpoint: 850,
    settings: {
      prevArrow: '<img src="assets/img/prev-btn-sm.svg" id="prev" alt="previous button">',
      nextArrow: '<img src="assets/img/next-btn-sm.svg" id="next" alt="next button">',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false 
    } 
  }] 
});

$('.menu-toggle').click(function(){
   $("#nav-links").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

$('#nav-links').click(function(){
   $("#nav-links").toggleClass("mobile-nav");
   $('.menu-toggle').toggleClass("is-active");
});


  