var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
  loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor:true,
  loop:true,
 
  autoplay:{
    delay:4500,
    disableOnInteraction:false,
  },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    600:{
      slidesPerView:2,
    }
  }
  
  });



 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 576px
      100: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      // when window width is <= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // you can add more breakpoints as needed

    },
  });
