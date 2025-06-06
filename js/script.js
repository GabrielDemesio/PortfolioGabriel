document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.content-section');

    function setActive(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        links.forEach(link => link.classList.remove('active-link'));

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        const targetLink = document.querySelector(`.nav-menu a[data-section="${sectionId}"]`);
        if (targetLink) {
            targetLink.classList.add('active-link');
        }
    }

    function typeEffect() {
        const element = document.querySelector('.writing');
        if (element) {
            const text = element.innerHTML;
            element.innerHTML = '';
            element.style.borderRight = '2px solid var(--accent-color)';

            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    element.style.borderRight = 'none';
                }
            }, 75);
        }
    }

    setActive('home');
    typeEffect();

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            setActive(sectionId);
        });
    });
});
