import '../styles/main.scss';
import '../styles/responsive.scss';
import './data.js';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', event => {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', event => {
    drawer.classList.toggle('open');
    event.stopPropagation();
})

main.addEventListener('click', event => {
    drawer.classList.remove('open');
    event.stopPropagation();
})