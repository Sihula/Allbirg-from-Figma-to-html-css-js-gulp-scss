$(function () {

  var mixer = mixitup('.favorites__inner', {
    load: {
      filter: '.everyday'
    }

  });

  $('.slider__collection-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>'
  });

  $('.slider__arrivals-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>'
  });

  $('.slider__stories-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>'
  });

});