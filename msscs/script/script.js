const menuBars = document.querySelector('.navbar__bars');
const navMenu = document.querySelector('.navbar__menu');
const closeBTN = document.querySelector('.navbar__open--xmark');

function toggleMenu() {
    navMenu.classList.add('navbar__open');
    navMenu.classList.remove('navbar__menu')
}

function closeMenu() { 
    navMenu.classList.add('navbar__menu');
    navMenu.classList.remove('navbar__open');
}

menuBars.addEventListener('click', toggleMenu);
closeBTN.addEventListener('click', closeMenu);
