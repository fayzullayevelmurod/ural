let swiper = new Swiper(".bluesalesSwiper", {
  spaceBetween: 12,
  slidesPerView: 2,
  navigation: {
    nextEl: ".bluesales-button-next",
    prevEl: ".bluesales-button-prev",
  },
  pagination: {
    el: ".bluesales-pagination",
    type: "fraction",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      spaceBetween: 35,
      slidesPerView: 4,
    },
  },
});

