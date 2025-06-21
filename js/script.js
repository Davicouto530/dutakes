let menuIcon = document.querySelector('#menu-icon');
let ul = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('#menu-icon img').src = 'img/burger-bar.png'
    } else {
        ul.classList.add('ativo');
        document.querySelector('#menu-icon img').src = 'img/close.png';
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
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
});

// Colocando o ano automaticamente 
const pRodape = document.getElementById("pAno");
const data = new Date();

const dataAno = data.getFullYear();

pRodape.innerHTML += ` ${dataAno} fotografias de dutakes`;

