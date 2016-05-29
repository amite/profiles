
const API = 'https://randomuser.me/api/?results=5';

export function fetchProfiles() {
    let url = API;
    return fetch(url)
      .then( (response) => response.json() );
}