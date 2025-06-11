$(document).ready(function() {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active')
    })
});

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
