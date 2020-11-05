const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav__link');
const languageTriangle = document.querySelector('.languageTriangle');

// burger lines
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const burger = document.querySelector('.burger');
const navInner = document.querySelector('.nav__inner');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 0) {
        nav.classList.add('nav-active');
        languageTriangle.classList.add('languageTriangle-active');
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.add('nav__link-active');
        }
    } else {
        nav.classList.remove('nav-active');
        languageTriangle.classList.remove('languageTriangle-active');
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('nav__link-active');
        }
    }
});

burger.addEventListener('click', () => {
    line1.classList.toggle('burger__exit1');
    line2.classList.toggle('burger__exit2');
    line3.classList.toggle('burger__exit3');
    navInner.classList.toggle('nav__active');
    nav.classList.toggle('nav__active');
    burger.classList.toggle('burger-active');
})