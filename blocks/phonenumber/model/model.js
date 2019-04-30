const BASE_URL = 'http://apilayer.net/api/validate?';
const ACCESS_KEY = 'abd986698096cbb12fa486eafbf6b7f9';

export class Model {
  validation (number) {
    return fetch(`${BASE_URL}access_key=${ACCESS_KEY}&number=${number}&country_code=&format=1`)
      .then(response => {
        return response.json()
      },
      reject => {
        console.log(reject);
        let data = {}
        data.success = false;

        return data
      });
  };
}
