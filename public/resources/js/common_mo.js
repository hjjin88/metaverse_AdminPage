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


//   sce1 Swiper
var swiper = new Swiper(".sec1_mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//   sec4, sce5 Swiper
var swiper = new Swiper(".sec4_mySwiper", {
    slidesPerView: 'auto',
    // spaceBetween: 16,
    freeMode: true,
    centeredSlides:	false,
    loop: true,
    loopedSlides: 5,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
    },
});

