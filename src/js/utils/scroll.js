import { onElementLoaded } from './onElementLoaded.js';

onElementLoaded('.js-scroll', () => {
    const scrollToCreator = (element) => {
        return () => {
            const target = document.getElementById(element.dataset['scroll']);

            if(!target) return;
            
            const y = target.getBoundingClientRect().top + window.scrollY - 70;
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
        };
    };

    const links = document.querySelectorAll('.js-scroll');

    Array.prototype.forEach.call(links, (element) => {
        element.addEventListener('click', scrollToCreator(element));
    });
});