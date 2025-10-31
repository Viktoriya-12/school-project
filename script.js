let isFirstClick = true;
const burger = document.querySelector('.burger-menu__button');
const menu = document.querySelector('.burger-menu__content');
const overlay = document.querySelector('.burger-menu__overlay');
const body = document.body;

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('body-no-scroll');

    if (isFirstClick && this.classList.contains('active')) {
        document.querySelector('.burger-menu__arrow').style.opacity = '0';
        document.querySelector('.burger-menu__text').style.opacity = '0';
        isFirstClick = false;
    }
});

overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('body-no-scroll');
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.architecture__item');
    
    items.forEach(item => {
        const label = item.querySelector('.architecture__label');
        const info = item.querySelector('.architecture__info');
        
        label.addEventListener('click', function() {
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.architecture__info').classList.remove('active');
                }
            });
            item.classList.toggle('active');
            info.classList.toggle('active');
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
        observer.observe(section);
    });
});