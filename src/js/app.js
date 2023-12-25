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

function initBurgerTint()
{
    const burger_button = document.querySelector(".burger")

    burger_button.addEventListener("click", (event) => {
        const tint = document.querySelector(".burger__tint");
        tint.classList.toggle("burger__tint_show");
        burger_button.classList.toggle("burger__active");
    });

}
function initSliderDirectionMain(){
    const swiper = new Swiper(".direction__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: ".direction-button-next",
            prevEl: ".direction-button-prev",
        },
        breakpoints:
        {
            1200: {
            slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            }
        }
        });
}
function initSliderAboutMain(){
    const swiper = new Swiper(".about-block__swiper", {
        slidesPerView: 3,
        //spaceBetween: 30,
        centeredSlides: true,
        loopPreventsSliding: true,
        //loop: true,
        navigation: {
            nextEl: ".about-block-button-next",
            prevEl: ".about-block-button-prev",
        },
        effect: "creative",
        loopedSlides: 3,
        creativeEffect: {
            limitProgress: 3,
            prev: {
                translate: ["-100%", 0, 0],
                //opacity: 0.3,
                scale: .75
            },
            next: {
                translate: ["100%", 0, 0],
                //opacity: 0.3,
                scale: .75
            }
        }
        });
}
function initSliderOurLifeMain(){
    const swiper = new Swiper(".our-life__swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: ".our-life-button-next",
            prevEl: ".our-life-button-prev",
        }
        });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const header = initHeader();
    initBurgerTint();
    initSliderDirectionMain();
    initSliderAboutMain();
    initSliderOurLifeMain();
})