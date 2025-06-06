document.addEventListener('DOMContentLoaded', () => {

    const projectsData = [
        {
            title: "Loja Web em Go",
            description: "Aplicação web full-stack para uma loja virtual, desenvolvida para aprofundamento em Golang. O back-end gerencia produtos e o front-end exibe o catálogo.",
            tags: ["Go", "PostgreSQL", "HTML/CSS"],
            github_link: "https://github.com/GabrielDemesio/Loja-Feito-em-Go"
        },
        {
            title: "API de Gestão (Projeto SOC)",
            description: "API RESTful para gerenciar exames de saúde de funcionários. A aplicação permite operações CRUD completas e foi construída com Java e Spring Boot.",
            tags: ["Java", "Spring Boot", "H2"],
            github_link: "https://github.com/GabrielDemesio/CRUDJava"
        },
        {
            title: "BookStore API",
            description: "Back-end de uma livraria online, desenvolvendo uma API para gerenciar o catálogo de livros, autores e pedidos, integrado com um banco de dados MySQL.",
            tags: ["Java", "Spring Boot", "MySQL"],
            github_link: "https://github.com/GabrielDemesio/bookstoreBackEnd"
        },
        {
            title: "BookStore Front-End",
            description: "Interface de usuário para a livraria online, consumindo a BookStore API. O front-end permite aos usuários navegar, buscar e visualizar os livros disponíveis.",
            tags: ["Angular", "TypeScript", "API Rest"],
            github_link: "https://github.com/GabrielDemesio/bookstore-front"
        },
        {
            title: "Aplicação Bancária",
            description: "Sistema de console que simula operações bancárias como saques e depósitos, focado em aplicar conceitos de Orientação a Objetos em Java.",
            tags: ["Java", "POO", "MySQL"],
            github_link: "https://github.com/GabrielDemesio/ProjectBankApp"
        },
        {
            title: "Aplicação API em GOLANG FullCycle",
            description: "Sistema de api em golang de criação de produtos e usuários com swagger.",
            tags: ["Golang", "gorm", "Swagger"],
            github_link: "https://github.com/GabrielDemesio/ProjectApifullcycle\n"

        }
    ];

    function renderProjects() {
        const projectListContainer = document.getElementById('project-list');
        if (!projectListContainer) return;

        projectListContainer.innerHTML = '';

        projectsData.forEach(project => {
            const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

            const projectCardHTML = `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-links">
                        <a href="${project.github_link}" target="_blank" title="Ver no GitHub"><i class="fa-brands fa-github fa-2x"></i></a>
                    </div>
                </div>
            `;

            projectListContainer.innerHTML += projectCardHTML;
        });
    }


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


    renderProjects();

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
