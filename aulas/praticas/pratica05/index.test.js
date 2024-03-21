const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test('Deve retornar status 200 e um JSON no GET', async function() {
    const response = await request.get('/produtos');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar status 201 e um JSON no GET', async function() {
    const response = await request.get('/produtos/1');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar status 404 e um JSON no GET', async function() {
    const response = await request.get('/produtos/100');
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar status 201 e um JSON no POST', async function() {
    const response = await request.post('/produtos').send({nome: 'banana nanica', preco: '10.00'});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar status 422 e um JSON no POST', async function() {
    const response = await request.post('/produtos').send({nome: 'banana nanica', preco: '10.00'});
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
});