export function extractQueryParams(query){
  return query
  .slice(1) //Recorta o ?(0), começa do 1 pra frente
  .split("&") //Separa pelo &
  .reduce((queryParams, params) => {
    //Status(key) vai pra um lado, Open(value) vai pra outro
    const [key, value] = params.split("=")

    queryParams[key] = value

    return queryParams
  }, {})
}