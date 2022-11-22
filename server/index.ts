const app = require('./app');

async function listen () {
   try {
    app.listen(3000, () => {
       console.log('Hello from SERVER');
    });
  } catch (error) {
    console.log('error in SERVER: ', error);
  }
}
listen()