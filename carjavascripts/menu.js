document.addEventListener("DOMContentLoaded", () => {
    const txtPuntaje = document.querySelector("#puntos");
    const nombre = document.querySelector("#nombre");
    const nombreJugador = document.querySelector("#nombre-jugador");
    const btnSalir = document.querySelector("#btn-salir");

    // Obtener nombre del jugador
    const nombreGuardado = localStorage.getItem("nombre") || "Invitado";
    nombre.textContent = nombreGuardado;
    nombreJugador.textContent = nombreGuardado;

    // Cargar puntaje
    let puntajeTotal = parseInt(localStorage.getItem("puntaje-total")) || 0;
    txtPuntaje.textContent = puntajeTotal;

    // Cargar categorías jugadas
    let categoriasJugadas = JSON.parse(localStorage.getItem("categorias-jugadas")) || [];

    // Agregar eventos a categorías
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        if (categoriasJugadas.includes(categoria.id)) {
            categoria.classList.add("desabilitada", "no-events");
        } else {
            categoria.addEventListener("click", () => {
                const id = categoria.id;
                localStorage.setItem("categoria-actual", id);
                categoriasJugadas.push(id);
                localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
                location.href = "juego.html";
            });
        }
    });

    // Evento salir
    btnSalir.addEventListener("click", () => {
        const confirmar = confirm("¿Seguro que quieres salir? Se borrarán los datos del jugador.");
        if (confirmar) {
            localStorage.clear();
            location.href = "/carhtml/Centro_juegos.html"; // <-- Redirección actualizada
        }
    });
});


