const API_KEY = '';

export default class Api {
  static getPostList() {
    let url = 'https://jsonplaceholder.typicode.com/posts';

    return fetch(url)
    .then(response => response.json())
    .then(json     => json)
    .catch(error   => console.warn(error));
  }
}
