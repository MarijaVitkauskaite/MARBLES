const express = require('express');
const cors = require('cors');
const router = require('./router');
import { DB } from './schemas/databaseConnection';

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
  await DB.connection.sync(); // synchronize all models
})();

module.exports = app;
