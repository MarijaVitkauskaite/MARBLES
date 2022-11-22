const express = require('express');
const cors = require('cors');
const router = require('./router');
import {box} from './schemas/index'

const app = express();
// TODO enable cors only on sites with want + change console.log to more useful ones
app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
   const obj = {
      force: true
   }
   await box.connection.sync(obj); // synchronize all models
})()

module.exports = app