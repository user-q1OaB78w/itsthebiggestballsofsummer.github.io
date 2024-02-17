const mobileSwiper = new Swiper('.mobile-swiper',
{
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    spaceBetween: 250,
    pagination:
    {
      el: '.mobile-swiper-pagination',
      clickable: true,
    },
    navigation:
    {
      nextEl: ".swiper-button-next",
    },
});

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

const reviewSwiper = new Swiper('.review-swiper',
{
    direction: 'horizontal',
    loop: false,
    spaceBetween: 50,
    slidesPerView: 'auto',
    autoplay:
    {
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 2000,
    pagination:
    {
      el: '.review-swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
});