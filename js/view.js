const View = {
    mostrarVersiculo(versiculo) {
        const v = document.getElementById("versiculo");
        v.innerHTML = `${versiculo.texto} <br><small>${versiculo.referencia}</small>`;
        document.getElementById("iconoDia").src = `assets/icons/${versiculo.icono}`;
    },

    mostrarTrivia(trivia) {
        document.getElementById("pregunta").innerText = trivia.pregunta;
        document.getElementById("iconoTrivia").src = `assets/icons/${trivia.icono}`;
        const opcionesDiv = document.getElementById("opciones");
        opcionesDiv.innerHTML = "";

        trivia.opciones.forEach((opcion, index) => {
            const btn = document.createElement("button");
            btn.textContent = opcion;
            btn.onclick = () => {
                if (index === trivia.respuesta) {
                    Swal.fire({
                        title: "¡Correcto! 🎉",
                        text: "Muy bien, acertaste.",
                        icon: "success",
                        confirmButtonText: "Continuar"
                    });
                } else {
                    Swal.fire({
                        title: "Ups 😅",
                        text: "Intenta de nuevo.",
                        icon: "error",
                        confirmButtonText: "Reintentar"
                    });
                }
            };
            opcionesDiv.appendChild(btn);
        });
    },

    cambiarVista(id) {
        document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
        document.getElementById(id).classList.add("active");
    }
};
