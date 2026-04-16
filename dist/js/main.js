const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuNavItems = document.querySelectorAll('.menu-nav-item');

menuBtn.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
    menuNavItems.forEach(item => item.classList.toggle('open'));

});

const typedText = document.querySelector('.typed-text');

const words = [
    "Frontend Developer in progress",
    "WordPress Developer in progress",
    "turning passion into projects"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = words[wordIndex];

    if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1500); // čekaj 1.5s pa briši
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // idi na sljedecu riječ
    }

    setTimeout(type, isDeleting ? 60 : 100); // brisanje brže od kucanja
}

type(); // pokreni
