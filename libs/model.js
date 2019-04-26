const BASE_URL = 'https://intensive-mail-server.herokuapp.com';

export class Model {
  request (verb, path, body) {
    const headers = {};
    if (verb !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }
    return fetch(`${BASE_URL}/${path}`, {
      method: verb, // GET, PUT, POST
      headers,
      body
    }).then(data => {
      console.log(`get response ${path} ${data.status}`);
      return data.json();
    });
  }
}
