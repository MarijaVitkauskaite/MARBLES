const supertest = require('supertest')
const app = require('../app') 
const request = supertest(app)


function makeletteredString() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makePassword() {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

describe('habit tests', () => {

it('should create a new habit', async () => {
  const habit = makeletteredString();
  const email = makeletteredString()
  const id = makeletteredString()
    await request.post('/register')
      .send({
        email: email,
        id: id,
      })
    const res = await request.post('/habits')
      .send({
        habit: habit,
        id: id
      })
    expect(res.statusCode).toEqual(201)
  })

it('should display habits', async () => {
  let date = Date.now()
  JSON.stringify(date)
  const habit = makeletteredString();
  const email = makeletteredString();
  const id = makeletteredString()

  const password = makePassword()
  
    await request.post('/register')
      .send({
        email: email,
        id: id,
      })
  
    await request.post('/habits')
      .send({
        habit: habit,
        id: id
      })
  
    const res = await request.get('/habits')
      .send({
        date: date,
        id: id
      })
  
    expect(res.statusCode).toEqual(201)
})
  
it('should delete habits', async () => {
  let date = Date.now()
  JSON.stringify(date)
  const habit = makeletteredString();
    const email = makeletteredString();
   const id = makeletteredString()
    await request.post('/register')
      .send({
        email: email,
        id: id,
      })
  
    await request.post('/habits')
      .send({
        habit: habit,
        id: id
      })
  
    const res = await request.delete(`/delete/${id}`)
      .send({
        date: date
      })
  
    expect(res.statusCode).toEqual(201)
})  
  
it('should complete habits', async () => {
   let date = Date.now()
  JSON.stringify(date)
  const habit = makeletteredString();
    const email = makeletteredString();
   const id = makeletteredString()
    await request.post('/register')
      .send({
        email: email,
        id: id,
      })
  
    await request.post('/habits')
      .send({
        habit: habit,
        id: id
      })
  
    const res = await request.complete(`/delete/${id}`)
       .send({
        date: date
      })
    expect(res.statusCode).toEqual(201)
})    
  
  
  
  
});

