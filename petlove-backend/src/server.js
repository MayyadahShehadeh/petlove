'use strict';
// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('../routes/routes.js');
const logger = require('./middlewares/logger.js');

const v1Routes = require('../routes/v1.js');
const v2Routes = require('../routes/v2.js');
const axios = require('axios');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
// app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);


// http://localhost:3000/getDogs
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
// app.get('/getCats',async (req, res) => {
//   // let breedSearchQuery = req.query.breedQuery;

//   let optionss = {
//       method: 'GET',
//       url: `https://api.api-ninjas.com/v1/cats?grooming=5`,

//       headers: {
//           'X-Api-Key': 'mNs9+mOi4Db1P/jnY0J2AA==R13Q4QZjUKmO8Nhm',
//       },
//   };
//   try {
//     const response = await axios.request(optionss);
//     console.log(response.data);
//     res.json(response.data);

//   } catch (error) {
//     console.error(error);
//   }

// });

app.get('/', (req, res) => {
  res.send('from home route!!!');
});


// app.listen(PORT, () => console.log(`listening on ${PORT}`));



// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
