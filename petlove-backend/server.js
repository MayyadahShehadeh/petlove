'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');

// const axios = require('axios');

app.use(cors());
app.use(express.json());

// // http://localhost:3000/getDogs
// app.get('/getDogs',async (req, res) => {

//   const options = {
//     method: 'GET',
//     url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds/group/breed_status/extinct',
//     headers: {
//       'X-RapidAPI-Key': '6322f28099msh73232fc9d25ee65p130ba0jsn9551d05adf81',
//       'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     res.json(response.data);

//   } catch (error) {
//     console.error(error);
//   }
// });


// app.get('/', (req, res) => {
//   res.send('from home route!!!');
// });


// // app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};

