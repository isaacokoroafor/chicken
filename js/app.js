new Swiper("#swiper-1", {
  effect: "fade",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  preventClicks: false,
  preventClicksPropagation: false,
});
