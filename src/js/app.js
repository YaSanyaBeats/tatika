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
function initProductSidebarButton(){
    const button = document.querySelector(".product-card-main__question");
    const sidebar = document.querySelector(".product__sidebar");
    const sidebar_background = document.querySelector(".header__sidebar-background");
    button.addEventListener("click", (event) => {
        sidebar_background.style.display = "block";
        sidebar.style.right = "0";
    });

    const buttonClose = document.querySelector(".product-sidebar__close")
    buttonClose.addEventListener("click", (event) => {
        sidebar_background.style.display = "none";
        sidebar.style.right = "-700px";
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
                let accordion_shevron = card.querySelector('.accordion__button');
                accordion_shevron.classList.toggle('accordion__button_active')
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
function initDropDownCardProduct(){
    const dropdown_button = document.querySelector('.product-card-main__size-button')
    const dropdown_shevron = document.querySelector('.product-card-main__size-shevron')
    dropdown_button.addEventListener('click', (event) => {
        let dropdown_menu = document.querySelector('.size__dropdown-menu')
        dropdown_menu.classList.toggle('size__dropdown-menu_active')
        dropdown_shevron.classList.toggle('product-card-main__size-shevron_active')
    })
    const dropdown_elements = document.querySelectorAll('.size-dropdown-menu__element')
    const dropdown_input = document.querySelector('.size-input')
    dropdown_elements.forEach((element) => {
        element.addEventListener('click', (event) => {
            let text = element.textContent
            let button_text = document.querySelector('.product-card-main__size-first')
            button_text.innerHTML = text
            dropdown_input.setAttribute("value", text);
        })
    })
}
function initCardProductLike() {
    const like_button = document.querySelector('.product-card-main__like');
    const like_shevron = like_button.querySelector('.product-card-main__heart')
    const like_shevron_fill = like_button.querySelector('.product-card-main__heart-fill')
    like_button.addEventListener('click', (event) => {
        like_shevron.classList.toggle('product-card-main__heart_active')
        like_shevron_fill.classList.toggle('product-card-main__heart-fill_active')
    })
}
function initFirstProductCardSlider(){
    const swiper = new Swiper('.product-slider__swiper', {
        slidesPerView: 5,
        speed: 400,
        freeMode: true,
        //spaceBetween: 100,
        loop: true,
      });
}
function initproductSliderLike() {
    const like_buttons = document.querySelectorAll('.product-slider__like-link');
    like_buttons.forEach((like_button) => {
        like_button.addEventListener('click', (event) => {
            like_button.classList.toggle('product-slider__like-link_active')
        })
    })

}
document.addEventListener('DOMContentLoaded', (event) => {
    const header = initHeader();
    initCollectionSlider();
    initNoveltySlider();
    initBurgerButton();
    initBurgerMenuElements();
    initEquipmentAccordion();
    initSliderProductCard();
    initDropDownCardProduct();
    initCardProductLike();
    initProductSidebarButton();
    initFirstProductCardSlider();
    initproductSliderLike();
})