const desktopSwiper = new Swiper('.desktop-swiper',
{
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    spaceBetween: 250,
    pagination:
    {
      el: '.desktop-swiper-pagination',
      clickable: true,
    },
});

const mobileSwiper = new Swiper('.mobile-swiper',
{
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    spaceBetween: 250,
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