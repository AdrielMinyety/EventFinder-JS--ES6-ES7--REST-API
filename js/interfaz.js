class Interfaz {
    constructor(){
        // inicia la interfaz al instanciar.
        // the interface is started
        this.init();
        // leer lista de resultados
        // read results list
        this.listado = document.getElementById("resultado-eventos");
        this.spinner = document.getElementById("spinner");
    }
    // metodo para cuando inicie la app
    // method to starts the app
    init(){
        // imprimir las categorias de las REST API
        // print the categories from REST API
        this.imprimirCategorias();
    }
    // imprime las categorias de eventos
    // print the categories
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCatagerias()
            .then(categorias => {
                const categoriasData = categorias.categorias.categories;
                // selecionar el "<SELECT>" para imprimir categorias
                // get the "<SELECT>" to print categories
                const selectCategorias = document.getElementById("listado-categorias");
                // imprime las categorias en "<option>(s)" del <SELECT> 
                // print the categories in "<option>(s)" from <SELECT>
                categoriasData.forEach(categoria => {
                    const option = document.createElement("option");
                    option.value = categoria.id;
                    option.appendChild(document.createTextNode(categoria.name));
                    selectCategorias.appendChild(option);
                });
            });
    }
    // mostrar un mensaje emergente
    // show a message
    mostrarMensaje(mensaje, tipoAlert) {
        const div = document.createElement("div");
        div.classList = "alert text-center mt-4";
        div.classList.add(tipoAlert);
        div.textContent = mensaje;
        document.getElementById("buscador").appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2500);
    }
    // imprime los eventos
    // print events
    imprimirEventos(eventos) {
        const listaEventos = eventos.eventos.events;
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-lg-4 mb-5">
                    <div class="card shadow">
                        <div class=""card-header>
                            <img class="img-fluid w-100" src="${evento.logo !== null ? evento.logo.url : ''}">
                        </div>
                        <div class=""card-body>
                            <div class="card-text m-3">
                                <h3 class="text-center">${evento.name.text}</h3>
                                <p class="text-justify">${evento.description.text !== null ? evento.description.text.substring(0, 200) : 'No tiene descripción'}...</p>
                                <div class="container mx-auto p-2 font-weight-bold">
                                    <p class="m-0">Inicia: <span class="text-primary">${evento.start.local}</span></p>
                                    <p class="m-0">Termina: <span class="text-warning">${evento.end.local}</span></p>
                                </div>
                                <a class="btn btn-block text-white p-2" href="${evento.url}" target="_blank">Ver evento</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            `;
        })
    }
    // limpiar la busqueda anterior
    // clear previous search
    limpiarResultados(){
        this.listado.innerHTML = "";
    }
}