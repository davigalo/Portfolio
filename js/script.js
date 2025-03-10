document.addEventListener("DOMContentLoaded", function () {
    //Seleccionamos todos los elementos con la clase "desaparece"
    const elements = document.querySelectorAll(".desaparece");
    
    //creamos un objeto de la clase IntersectionObserver y comprobamos si el elemento está visible,si es así le añadi,os la clase visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });
    
    //aplicamos el observer a cada uno de los elementos
    elements.forEach(el => observer.observe(el));


    const icons = document.querySelectorAll(".contenedor-iconos i");

    icons.forEach(icon => {
        icon.addEventListener("mouseover", function () {
            icon.classList.add("fa-bounce");
        });

        icon.addEventListener("mouseout", function () {
            icon.classList.remove("fa-bounce");
        });
    });
});