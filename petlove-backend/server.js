'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;




// app.listen(PORT, () => console.log(`listening on ${PORT}`));




module.exports = {
    server: app,
    start: (port) => {
      app.listen(port, () => {
        console.log(`Server Up on ${port}`);
      });
    },
  };

  