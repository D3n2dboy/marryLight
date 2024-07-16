import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.swiper', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            //slidesPerView: 'auto',
            spaceBetween: 50,
            //autoHeight: true,
            speed: 800,
            autoHeight: true,

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.buttons-trusted__prev',
                nextEl: '.buttons-trusted__next',
            },

            //Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,

                },
                600: {
                    slidesPerView: 2.2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 50,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});