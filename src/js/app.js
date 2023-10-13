import Header from './modules/Header.js';

const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

function isWebp() {
    // Проверка поддержки webp
    const testWebp = (callback) => {
        const webP = new Image();

        webP.onload = webP.onerror = () => callback(webP.height === 2);
        webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    // Добавление класса _webp или _no-webp для HTML
    testWebp((support) => {
        const className = support ? 'webp' : 'no-webp';
        document.querySelector('html').classList.add(className);
        console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
    });
}

function initHeader() {
    const headerNode = document.querySelector('header');
    if(headerNode) {
        return new Header(headerNode);
    }
}

isWebp();


function initCollectionSlider(){
    const swiper = new Swiper('.collection-slider__swiper', {
        slidesPerView: 3,
        speed: 400,
        freeMode: true,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '.collection-slider__next',
        }
      });
}
function initNoveltySlider(){
    const swiper = new Swiper('.novelty-slider__swiper', {
        slidesPerView: 3,
        speed: 400,
        freeMode: true,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '.novelty-slider__next',
        }
      });
}
function initBurgerButton(){
    const buttonBurger = document.querySelector(".header__burger");
    const sidebar = document.querySelector(".header__sidebar");
    buttonBurger.addEventListener("click", (event) => {
        sidebar.style.left = "0";
    });

    const buttonClose = document.querySelector(".header-sidebar__close")
    buttonClose.addEventListener("click", (event) => {
        sidebar.style.left = "-374px";
    });
}
const hasClass = (el, className) => el.classList.contains(className);
function initBurgerMenuElements(){
    const links = document.querySelectorAll(".header-sidebar__element");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {

            if (!hasClass(link,"header-sidebar__element_active")) 
            {
                let activeOldLink = document.querySelector(".header-sidebar__element_active");
                if (activeOldLink) activeOldLink.classList.remove("header-sidebar__element_active");
                link.classList.add("header-sidebar__element_active");
            }
            else
            {
                link.classList.remove("header-sidebar__element_active");
            }
        });
      });
}
document.addEventListener('DOMContentLoaded', (event) => {
    const header = initHeader();
    initCollectionSlider();
    initNoveltySlider();
    initBurgerButton();
    initBurgerMenuElements();
})