export function index({ request, response, database }) {
  // passo o nome do objeto para receber o valor
  const { status } = request.query;

  const filters = status ? { status } : null;

  const table = database.select("tickets", filters);

  response.end(JSON.stringify(table));
}

/*
 * CREATE - criar
 * INDEX - listar
 * UPDATE - atualizar
 * DELETE - remover
 * SHOW - para exibir um único registro
 */
