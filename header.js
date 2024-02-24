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
    const header = document.querySelector('.desktop-header');
    const headerHeight = header.clientHeight;

    const swiperSlides = document.querySelectorAll('.header-padding');

    swiperSlides.forEach(function(slide)
    {
        slide.style.paddingTop = `${headerHeight}px`;
    });
}

document.addEventListener('DOMContentLoaded', function ()
{
    updateSectionHeight();

    window.addEventListener('resize', function ()
    {
        updateSectionHeight();
    });
});

function updateSectionHeight()
{
    const header = document.querySelector('.mobile-header');
    const headerHeight = header.clientHeight;

    const swiperSlides = document.querySelectorAll('.mobile-header-padding');

    swiperSlides.forEach(function(slide)
    {
        slide.style.paddingTop = `${headerHeight + 32}px`;
    });
}