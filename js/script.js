let menuIcon = document.querySelector('#menu-icon');
let ul = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('menu-icon i').classList.add('fa-solid fa-bars');
    }else {
        ul.classList.add('ativo');
        document.querySelector('menu-icon i').classList.add('fa-solid fa-xmark');
    }
})

// Swiper JS Carrosel
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true

    }
});
