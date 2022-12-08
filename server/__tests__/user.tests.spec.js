const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

function makeletteredString() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makePassword() {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

describe('user tests', () => {
  it('should create a new user', async () => {
    const email = makeletteredString();
    const userId = makeletteredString();
    const res = await request.post('/register').send({
      email,
      userId,
    });
    expect(res.statusCode).toEqual(201);
  });

  it('should login a new user', async () => {
    const email = makeletteredString();
    const userId = makeletteredString();
    await request.post('/register').send({
      email,
      userId,
    });
    const res = await request.get('/login').send({
      email,
      userId,
    });
    expect(res.statusCode).toEqual(201);
  });
});
