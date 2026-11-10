// Menu responsivo

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Cerrar menu al seleccionar una opción

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});

// Formulario

const travelForm = document.getElementById("travel-form");
const formMessage = document.getElementById("form-message");

travelForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;

    if (name.trim() === "" || destination === "") {

        formMessage.textContent =
            "Por favor completa los campos obligatorios.";

        formMessage.style.color = "#dc2626";

        return;
    }

    formMessage.textContent =
        `¡Gracias, ${name}! Hemos recibido tu solicitud de información.`;

    formMessage.style.color = "#0d9488";

    travelForm.reset();

});