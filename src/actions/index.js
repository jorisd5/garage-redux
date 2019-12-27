export function setCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());

  return {
    type: 'SET_CARS',
    payload: promise
  };
}
