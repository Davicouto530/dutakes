// Menu hamburguer
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

// Efeito scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }else {
            entry.target.classList.remove('show');
        }
    });
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ---------- Inicio da area de lightbox ----------
// Seleciona todos os itens com a imagem
const imagens = document.querySelectorAll('.fotos-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

// Ao clicar na imagem, abre no lightbox
imagens.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('lightbox-hidden');
  });
});

// Fecha o lightbox ao clicar no botão
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('lightbox-hidden');
});

// Fecha ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('lightbox-hidden');
  }
});


