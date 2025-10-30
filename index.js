const swiper = new Swiper('.swiper', {
    speed: 800,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,
    loop: false,
    preloadImages: true,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});