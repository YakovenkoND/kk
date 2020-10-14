"use strict";

$(document).ready(function () {
  $('.slider-img').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1180,
      settings: {
        dots: false
      }
    }]
  });
  $('.hits-inner').slick({
    dots: false,
    slidesToShow: 4,
    arrows: true,
    infinite: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    } // {
    //   breakpoint: 806,
    //   settings: {
    //     slidesToShow: 2,
    //   }
    // },
    ]
  });
});