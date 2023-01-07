console.log('Index file');
import module from "./module";
module();
const axios = require('axios').default;
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });