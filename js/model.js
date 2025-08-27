const Model = {
    contenido: {},
    async cargarDatos() {
        const response = await fetch("data/contenido.json");
        this.contenido = await response.json();
    },
    obtenerVersiculo(dia) {
        return this.contenido.versiculos.find(v => v.dia === dia);
    },
    obtenerTrivia(dia) {
        return this.contenido.trivias.find(t => t.dia === dia);
    }
};
