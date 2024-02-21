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

    const swiperSlides = document.querySelectorAll('.header-padding');

    swiperSlides.forEach(function(slide)
    {
        slide.style.paddingTop = `${headerHeight}px`;
    });
}

document.addEventListener('DOMContentLoaded', function ()
{
    updateMobileSwiperHeight();

    window.addEventListener('resize', function ()
    {
        updateMobileSwiperHeight();
    });
});

function updateMobileSwiperHeight()
{
    const header = document.querySelector('mobile-header');
    const headerHeight = header.clientHeight;

    const swiperSlides = document.querySelectorAll('.mobile-header-padding');

    swiperSlides.forEach(function(slide)
    {
        slide.style.paddingTop = `${headerHeight}px`;
    });
}