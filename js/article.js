
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (adjust as needed)
        disableOnInteraction: false, // Autoplay continues even if the user interacts with it
      },
  });
