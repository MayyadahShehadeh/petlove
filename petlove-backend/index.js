'use strict';

require('dotenv').config();
const app = require('./server.js');
// const { db } = require('./models/index.js');


  app.start(process.env.PORT || 3001);

