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

describe('habit tests', () => {
  it('should create a new habit', async () => {
    const habit = makeletteredString();
    const email = makeletteredString();
    const userId = makeletteredString();
    const id = makeletteredString();

    await request.post('/register').send({
      email,
      userId,
    });
    const res = await request.post('/habits').send({
      habit,
      userId,
      id,
    });
    expect(res.statusCode).toEqual(201);
  });

  it('should display habits', async () => {
    let date = Date.now();
    JSON.stringify(date);
    const habit = makeletteredString();
    const email = makeletteredString();
    const userId = makeletteredString();
    const id = makeletteredString();

    await request.post('/register').send({
      email,
      userId,
    });

    await request.post('/habits').send({
      habit,
      id,
      userId,
    });

    const res = await request.get('/habits').send({
      date,
      id,
      userId,
    });

    expect(res.statusCode).toEqual(201);
  });

  it('should delete habits', async () => {
    let date = Date.now();
    JSON.stringify(date);
    const habit = makeletteredString();
    const email = makeletteredString();
    const id = makeletteredString();
    const userId = makeletteredString();

    await request.post('/register').send({
      email,
      userId,
    });

    await request.post('/habits').send({
      habit,
      userId,
      id,
    });

    const res = await request.delete(`/delete/${id}`).send({
      date,
    });

    expect(res.statusCode).toEqual(201);
  });

  it('should complete habits', async () => {
    let date = Date.now();
    JSON.stringify(date);
    const habit = makeletteredString();
    const email = makeletteredString();
    const id = makeletteredString();
    const userId = makeletteredString();

    await request.post('/register').send({
      email,
      userId,
    });

    await request.post('/habits').send({
      habit,
      id,
      userId,
    });

    const res = await request.put(`/delete/${id}`).send({
      date: date,
    });
    expect(res.statusCode).toEqual(201);
  });
});
