export function index({ request, response, database }) {
  const table = database.select("tickets");

  response.end(JSON.stringify(table));
}

/*
* CREATE - criar
* INDEX - listar 
* UPDATE - atualizar
* DELETE - remover
* SHOW - para exibir um único registro
*/
