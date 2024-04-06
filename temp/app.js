const url = "https://swapi.dev/api";

fetch(`${url}/people/`, {method: 'GET'})
    .then((response) => (response.json()))
    .then(data => console.log(data))
    .catch(error => console.log("Somthing went wrong"));
