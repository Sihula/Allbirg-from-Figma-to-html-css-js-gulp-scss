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
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },


    ]
  });

  $('.slider__arrivals-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },


    ]
  });

  $('.slider__stories-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },


    ]

  });

});

const navSlide = () => {
  const burger = document.querySelector('.burger__btn');
  const nav = document.querySelector('.nav');


  burger.addEventListener('click', () => {
    nav.classList.toggle('burger__active');
  });
};

navSlide();