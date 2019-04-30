const BASE_URL = 'http://apilayer.net/api/validate?';
const ACCESS_KEY = '1a66ab8e6f404fe484554f900c232b72d';

export class Model {
  request (number) {
    return fetch(`${BASE_URL}access_key=${ACCESS_KEY}&number=${number}&country_code=&format=1`)
      .then(response => {
        return response.json()
      });
  };
  validation () {

  }
}
