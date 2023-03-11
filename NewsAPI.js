const axios = require('axios');
const apiKey = a9ac46eb-6969-4647-b33e-d5f3fd836bb3
const url = `https://api.goperigon.com/v1/headlines?apiKey=a9ac46eb-6969-4647-b33e-d5f3fd836bb3`

axios.get(url)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
