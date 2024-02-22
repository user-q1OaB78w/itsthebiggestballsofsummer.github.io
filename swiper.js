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