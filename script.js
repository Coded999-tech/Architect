const hamburger = document.querySelector('.hamburger-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        document.querySelector('.container').classList.toggle('change');
    });
}

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const container = document.querySelector('.container');
        if (container) {
            container.classList.remove('change');
        }
    });
});

const scrollBtn = document.querySelector('.scroll-btn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        document.querySelector('html').style.scrollBehavior = 'smooth';
        setTimeout(() => {
            document.querySelector('html').style.scrollBehavior = 'unset';
        }, 1000);
    });
}