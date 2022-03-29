import * as flsFunc from './moduls/func.js';

flsFunc.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';


document.querySelector('.header__dropdown').addEventListener('click', () => {
    document.querySelector('.header__dropdown').classList.toggle('header__dropdown_open')
})