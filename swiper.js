const swiper = new Swiper('.swiper',
{
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    spaceBetween: 250,
    pagination:
    {
      el: '.main-swiper-pagination',
      clickable: true,
    },
});

const reviewSwiper = new Swiper('.review-swiper',
{
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    slidesPerView: 'auto',
    speed: 2000,
    autoplay:
    {
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    pagination:
    {
      el: '.review-swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
});