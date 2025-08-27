const Controller = {
    async init() {
        await Model.cargarDatos();

        // Día actual del mes
        const hoy = new Date().getDate();

        // Cargar contenido del día, si no existe, usamos el primero
        const versiculo = Model.obtenerVersiculo(hoy) || Model.obtenerVersiculo(1);
        const trivia = Model.obtenerTrivia(hoy) || Model.obtenerTrivia(1);

        View.mostrarVersiculo(versiculo);
        View.mostrarTrivia(trivia);

        // Eventos de navegación
        document.getElementById("btnIniciar").addEventListener("click", () => View.cambiarVista("textoDia"));
        document.getElementById("btnTrivia").addEventListener("click", () => View.cambiarVista("trivia"));
        document.getElementById("btnVolver").addEventListener("click", () => View.cambiarVista("textoDia"));
    }
};

document.addEventListener("DOMContentLoaded", Controller.init);
