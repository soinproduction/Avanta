
// const burgerBtn = document.querySelector(".burger-btn");
// const mobileBox = document.querySelector(".mobile-box");
// const filterAside = document.querySelector(".filter-aside");
// const closeAside = document.querySelector(".close-filter");


// burgerBtn.onclick = function() {
//   burgerBtn.classList.toggle('active');
//   mobileBox.classList.toggle('active');
// };

let firstSwiperNav = new Swiper(".first-nav", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});


let firstSwiper = new Swiper(".first-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: firstSwiperNav,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

let secondSwiperNav = new Swiper(".second-slider", {
  slidesPerView: 1,
  // effect: "fade",
  navigation: {
    nextEl: ".second-slider__r",
    prevEl: ".second-slider__l",
  },
  effect: "flip",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
});

let tabsSwiper = new Swiper(".tabs-slider", {
  spaceBetween: 55,
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 2,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

AOS.init();
// AOS.refresh();


  var block_show = null;
  let scrollBox = document.getElementById('move');

  function scrollTracking(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.second-section').offset().top;
    var eh = $('.second-section').outerHeight();

    // var et = $('.paralax-box').offset().top;
    // var eh = $('.paralax-box').outerHeight();

    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show == null || block_show == false) {
        // console.log('Блок active в области видимости');
        scrollBox.classList.add("active")

        // scrollBox.style.transform = 'translateX(' + y + 'px)';
      }
      block_show = true;
    } else {
      if (block_show == null || block_show == true) {
        // console.log('Блок active скрыт');

        scrollBox.classList.remove  ("active")
      }
      block_show = false;
    }
  }

  $(window).scroll(function(){
    scrollTracking();
  });

  $(document).ready(function(){
    scrollTracking();
  });




  $(window).scroll(function(e){
    parallax();
  });
    var secHight = $('.third-sec').offset().top;
    var secHight2 = $('.frouth-sec').offset().top;

    function parallax(){
    var scrolled = $(window).scrollTop();
    var value = scrolled - secHight;
    var value2 = scrolled - secHight2;
    $('.third-sec .paralax-box > h2').css('background-position-y', + (value * 0.15 + 10)+'px');
    $('.frouth-sec .paralax-box > h2').css('background-position-y', + (value2 * 0.15+ 10)+'px');
  }


  const container = document.querySelector('.filter-buttons')

  container.addEventListener('click', function(e) {
    const items = document.querySelectorAll('.filter-buttons__btn')
    const target = e.target
    Array.from(items).forEach(item => {
      item.classList.remove('active')
    })
    target.classList.add('active')
  });
