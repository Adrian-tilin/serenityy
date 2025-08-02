// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.querySelector("#nombre");
    const btnComenzar = document.querySelector("#comenzar");

    btnComenzar.addEventListener("click", () => {
        const nombre = nombreInput.value.trim();

        if (nombre !== "") {
            // Guarda datos en localStorage
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("puntaje-total", 0);
            localStorage.removeItem("categorias-jugadas");

            // Redirige al menú
            location.href = "menu.html";
        } else {
            alert("Por favor, ingresa tu nombre para comenzar.");
        }
    });
});
