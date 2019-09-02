// instancias de classes
// set the classes
const eventBrite = new EventBrite();
const UI = new Interfaz();
// eventListener para buscar eventos
// eventListener to search events
document.getElementById("buscarBtn").addEventListener("click", (e) => {
    e.preventDefault();
    // seleccionado los elementos y obteniendo los datos
    // getting the elements and taking the data
    const textoBuscador = document.getElementById("evento").value;
    const categorias = document.getElementById("listado-categorias");
    const categSelecionada = categorias.options[categorias.selectedIndex].value;
    // validar si los campos están vacios
    // validate if the data are empties
    if (textoBuscador !== '' && categSelecionada !== '') {
        // imprimir "cargando"
        // print "loading"
        UI.spinner.classList = "d-block";
        eventBrite.obtenerEventos(textoBuscador, categSelecionada)
            .then(eventos => {
                // eliminar "cargando"
                // delete "loading"
                UI.spinner.classList = "d-none";
                // validar if los resultados no estan vacíos
                // validate if the results are not empties
                if (eventos.eventos.events.length > 0) {
                    // imprimir eventos
                    // print events
                    UI.limpiarResultados();
                    UI.imprimirEventos(eventos);
                }else {
                    UI.mostrarMensaje("No hay eventos de su busqueda", "alert-warning");
                }
            })
    }else {
        // mostrar mensaje
        // show message
        console.log("Digame qué quiere buscar");
        UI.mostrarMensaje("Digame qué quiere buscar", "alert-danger");
    }
})