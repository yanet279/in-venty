document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById("btn-menu");
    const btnCerrar = document.getElementById("btn-cerrar");
    const containerNavbar = document.querySelector(".container-navbar");

    // Mostrar el menú y alternar el botón
    btnMenu.addEventListener("click", function(e) {
        e.preventDefault();
        containerNavbar.style.display = "block";
        btnMenu.style.display = "none";
        btnCerrar.style.display = "inline";
    });

    // Cerrar el menú y alternar el botón
    btnCerrar.addEventListener("click", function(e) {
        e.preventDefault();
        containerNavbar.style.display = "none";
        btnCerrar.style.display = "none";
        btnMenu.style.display = "inline";
    });
});