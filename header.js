document.addEventListener('DOMContentLoaded', function ()
{
    updateSwiperHeight();

    window.addEventListener('resize', function ()
    {
        updateSwiperHeight();
    });
});

function updateSwiperHeight()
{
    const header = document.querySelector('header');
    const headerHeight = header.clientHeight;

    const swiperSlides = document.querySelectorAll('.swiper-slide-padding');

    swiperSlides.forEach(function(slide)
    {
        slide.style.paddingTop = `${headerHeight}px`;
    });
}
