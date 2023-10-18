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
    const sidebar_background = document.querySelector(".header__sidebar-background");
    buttonBurger.addEventListener("click", (event) => {
        sidebar_background.style.display = "block";
        sidebar.style.left = "0";
    });

    const buttonClose = document.querySelector(".header-sidebar__close")
    buttonClose.addEventListener("click", (event) => {
        sidebar_background.style.display = "none";
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
function initEquipmentAccordion() {
    const equipmentCards = document.querySelectorAll('.accordion__elem');
    if(equipmentCards.length > 0) {
        equipmentCards.forEach((card) => {
            const button = card.querySelector('.accordion__header');
            button.addEventListener('click', (event) => {
                card.classList.toggle('accordion__elem_active');
                button.classList.toggle('accordion-button_active')
            })
        })
    }
}
function initSliderProductCard(){
    const swiper = new Swiper(".product-card-main__mySwiper1", {
        spaceBetween: 50,
        slidesPerView: 'auto',
        direction: 'vertical',
        freeMode: true,
        watchSlidesProgress: true,
      });
      const swiper2 = new Swiper(".product-card-main__mySwiper", {
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".product-card-main__swiper-button-next",
          prevEl: ".product-card-main__swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
}
document.addEventListener('DOMContentLoaded', (event) => {
    const header = initHeader();
    initCollectionSlider();
    initNoveltySlider();
    initBurgerButton();
    initBurgerMenuElements();
    initEquipmentAccordion();
    initSliderProductCard();
})