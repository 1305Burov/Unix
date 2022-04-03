import * as flsFunc from './moduls/func.js';

flsFunc.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
    // modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 7,
    initialSlide: 3,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
    },
});

document.querySelector('.header__dropdown').addEventListener('click', () => {
    document.querySelector('.header__dropdown').classList.toggle('header__dropdown_open')
})

document.querySelectorAll('.button-cta').forEach(item => {
    item.addEventListener('click', animateClick);
})

function animateClick(e) {
    let animationCircle = document.createElement('div'),
        mVal = Math.max(this.clientWidth, this.clientHeight),
        Rect = e.target.getBoundingClientRect();

    animationCircle.style.width = `${mVal}px`;
    animationCircle.style.height = `${mVal}px`;
    animationCircle.style.left = `${e.clientX - Rect.left - (mVal / 2)}px`;
    animationCircle.style.top = `${e.clientY - Rect.top - (mVal / 2)}px`;

    animationCircle.classList.add('click-animation');
    this.appendChild(animationCircle);
    setTimeout(() => {
        animationCircle.remove();
    }, 500);
}