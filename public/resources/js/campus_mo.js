//nav
const hamburger = document.querySelector(".menuOpen");
const navLinks = document.querySelector(".mainMenu");
const links = document.querySelectorAll(".nav_manu li");
const modalBack = document.querySelector(".modalBack");
hamburger.addEventListener('click', function(e){
e.preventDefault();
navLinks.classList.toggle("open");
modalBack.classList.toggle("open");

links.forEach(function(link){
link.classList.toggle("fade");
});
hamburger.classList.toggle("toggle");
});


// 스와이프
var sec1swiper = new Swiper(".sec1_mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var tabItem = $('.sec4_con .swiper_btn li');
var mySwiper = new Swiper('.sec4_mySwiper', {
  spaceBetween: 0,
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function () {
      var n = this.activeIndex;
      changeTab(n);
    }
  }
})
//tab    silde
tabItem.click(function () {
  var ind = $(this).index();
  changeTab(ind);
  mySwiper.slideTo(ind);
})
//tab
function changeTab(index) {
  tabItem.removeClass('active').eq(index).addClass('active');
}



var galleryTop = new Swiper('.gallery-top', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  loopedSlides: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 4,
  slidesPerView: "auto",
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 10,
});
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


