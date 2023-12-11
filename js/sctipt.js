const navLogo = document.querySelector('.nav__logo');
const navTools = document.querySelector('.nav__tools');
const navLinks = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
    navLinks.classList.toggle('nav__links_active');
    hamburger.classList.toggle('hamburger_active');
    navTools.classList.toggle('nav__tools_active');
    navLogo.classList.toggle('nav__logo_active');
}

const navLinksAll = document.querySelectorAll('.nav__links a');
console.log(navLinksAll);


for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active');
        navTools.classList.remove('nav__tools_active');
        navLogo.classList.remove('nav__logo_active');
    }
}

const navToolsAll = document.querySelectorAll('.nav__tools button');


for (let i = 0; i < 3; i++) {
    navToolsAll[i].onclick = function () {
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active');
        navTools.classList.remove('nav__tools_active');
        navLogo.classList.remove('nav__logo_active');
    }
}


navLogo.onclick = function () {
    hamburger.classList.remove('hamburger_active');
    navLinks.classList.remove('nav__links_active');
    navTools.classList.remove('nav__tools_active');
    navLogo.classList.remove('nav__logo_active');
}