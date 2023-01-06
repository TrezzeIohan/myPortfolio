//Responsável por analisar quando os elementos estarão ao "alcance" da tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));