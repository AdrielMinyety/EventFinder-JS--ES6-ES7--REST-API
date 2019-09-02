class EventBrite {
    constructor () {
        this.token_auth = "SQY4SSCV6F6KHTVUR7HD";
        this.ordenar = "date";
    }
    // obtener categorias
    // get categories
    async obtenerCatagerias(){
        // consultar categorias a las REST API de EventBrite
        // take categories from REST API from EventBrite
        const respCategoria = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        // esperar las categorias y convertir a Json
        // wait for the categories and convert to Json
        const categorias = await respCategoria.json();
        // retornar las categorias
        // return the categories
        return {
            categorias
        }
    }
    // buscar eventos de la REST API
    // look for the events from REST API
    async obtenerEventos(evento, categoria) {
        // tomar los resultados de la consula  al REST API y convertilo a Json
        // take the result from the REST API query and convert to Json
        const respEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

        const eventos = await respEvento.json();
        // retorna el Json
        // return Json
        return {
            eventos
        }
    }
}