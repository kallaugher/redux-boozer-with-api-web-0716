const BASE_URL = 'http://localhost:3000/api/v1'

export function fetchCocktails(){

  const cocktails = fetch(`${BASE_URL}/cocktails`).then(response => {
    return response.json()
  }).then(cocktailsPayload => {
    return cocktailsPayload
  });

  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function createCocktail(params){
  const cocktail = fetch(`${BASE_URL}/cocktails`,
    {method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}).then( response => { return response.json() }).then( newCocktailPayload => { return newCocktailPayload});

    debugger;

  return {
    type: 'CREATE_COCKTAIL',
    payload: cocktail
  }
}
