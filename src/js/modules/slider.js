import Swiper from 'swiper';

const slider = document.querySelector('.swiper-container');
export const mySwiper = new Swiper(slider, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 8,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    slideToClickedSlide: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        760: {
            slidesPerView: 'auto',
            spaceBetween: 8
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 16
        }
    }
});