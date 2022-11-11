const express = require('express');
const cors = require('cors');
const router = require('./router');
const box = require('./models/index');

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(router);

box.user.hasMany(box.habit); //one to many relation 
box.habit.hasMany(box.daily);

(async() => {
    try {
        await box.connection.sync(); // synchronize all models
        app.listen(3000, () => {
            console.log('Hello from SERVER');
        });
    } catch (error) {
        console.log('error in SERVER: ', error);
    }
})();