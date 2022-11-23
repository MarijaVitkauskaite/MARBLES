const express = require('express');
const cors = require('cors');
const router = require('./router');
import { box } from './schemas/index';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

async function listen() {
  try {
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.log('error in SERVER: ', error);
  }
}
(async () => {
  await listen();
  await box.connection.sync(); // synchronize all models
})();

module.exports = app;
